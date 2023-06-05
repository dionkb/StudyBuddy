const APIKEY = "zAAt8sMrDY6P1CXQ7ytpmAbmzCLwmGgz";
let center=[-81.3792,28.5383]
    const map = tt.map({
        key: APIKEY,
        container: "map",
        center: center,
        zoom:10,
        dragpan: true,
        style: './mylightstyle.json'
    })
    
    map.on('click', function(event){
        //Query layer on point
        var touchingLayer = map.queryRenderedFeatures(event.point)[0]
        //If POI then display using the ID
        if (touchingLayer.layer.id === 'POI') {
            if(touchingLayer.properties.id) {
            displayPOIInformation(touchingLayer.properties.id)
          }
        }
        //Else we hide the POI div
        if(touchingLayer && touchingLayer.layer.id === 'POI') {
            displayPOIInformation(touchingLayer.properties.id)
        } else {
            hidePOIInfo()
        }
    });

    map.on('mousemove', 'POI', function() {
        map.getCanvas().style.cursor='pointer';
    });
    map.on('mouseleave', 'POI', function() {
        map.getCanvas().style.cursor = '';
    })

    //Information for POI Id console logged
    var displayPOIInformation = function(id) {
        tt.services.placeById({
            key: APIKEY,
            entityId : id
        })
        .then(function(response){
            console.log(response)
            var firstResult = response.results[0]
            //Displays information for first POI clicked in POI box
            document.getElementById('categories').innerHTML = firstResult.poi.categories,
            document.getElementById('poiname').innerHTML = firstResult.poi.name,
            document.getElementById('address').innerHTML = firstResult.address.freeformAddress
            if(firstResult.poi.url) {
                var str = "Visit website"
                var link = firstResult.poi.url
                if (!link.startsWith('http')) {
                    link = 'https://'+link
                }
                var result = str.link(link);
                document.getElementById('url').innerHTML = result
            }
            if(firstResult.poi.phone) {
                document.getElementById('phone').innerHTML = firstResult.poi.phone
            }
            //check for datasources or images
            if(firstResult.dataSources) {
                var id = firstResult.dataSources.poiDetails[0].id
                fetchPOIDetails(id)
            }
        })
    }

    var fetchPOIDetails = function (id) {
        clearPOIPopup()
        moveMap(poi.position)
        displayPOI(poi)
        if (poi.dataSources) {
            var details = poi.dataSources.poiDetails[0]
        }
        tt.services.poiDetails({
            id : id,
            key: APIKEY,
        })
        .then(function(poiDetResponse) {
            console.log(poiDetResponse)
            displayRating(poiDetResponse.result.rating)
            displayPhotos(poiDetResponse.result.photos)
           /* if (response.result.photos) {
                var photoId =response.result.photos[0].id
                fetchPhoto(photoId) */
            })
        }

    var clearPOIPopup = function() {
        document.getElementById('rating').style.display = 'none'
        document.getElementById('url').style.display = 'none'
        document.getElementById('phone').style.display = 'none'
        document.getElementById('currentPhoto').style.display = 'none'
    }
    
    var displayRating = function(rating) {
        if (rating) {
            document.getElementById('rating').style.display = 'block'
            var ratingText = 'Rating '+rating.value+'/'+rating.totalRatings
            document.getElementById('rating').innerHTML = ratingText
        }
    }

    var photoArray = [];
    var currentPhoto;
    var displayPhotos = function(photos) {
    if (photos) {
        photoArray = []
        for (var photodata of photos) {
            photoArray.push(photodata.id)
        }
        document.getElementById('currentPhoto').style.display = 'block'
        currentPhoto = 0;
        fetchPhoto(photoArray[0])
    }
}

    var nextPhoto = function() {
        var next = currentPhoto + 1;
        if (next >= photoArray.length) {
            next = 0;
        }
        if (next != currentPhoto) {
            currentPhoto = next;
            fetchPhoto(photoArray[currentPhoto])
        }
    }

    var fetchPhoto = function(id) {
        tt.services.poiPhotos ({
            id: id,
            key: APIKEY,
            width: 280,
            height: 300,
        })
        .then(function(data) {
            document.getElementById('currentPhoto').src = data
        })
    }

   // var populatePOIInfobox = function(id) {
        //Place by ID :

        //If there are datasources, then try to fetch the details
   // }      

 var displayPOI = function(poi) {
        document.getElementById('poiBoxInfo').style.display = 'block'
        document.getElementById('poi').style.display = poi.poi.name
        document.getElementById('address').style.display = poi.address.freeformAddress
        if (poi.poi.categories) {
            var categories = poi.poi.categories
            var container = document.getElementById('categories')
            //remove all elements
            while (contianer.firstChild) {
                container.removeChild(container.lastChild);
            }
            categories.forEach(element => {
                var catDiv = docuemnt.createElement('div')
                catDiv.classList.add('category');
                catDiv.innerHTML = element
                container.appendChild(catDiv)
            });
        }
    }

        var hidePOIInfo = function() {
            document.getElementById('poiBoxInfo').style.display = 'none'
        }

        var searchOptions = {
            key: APIKEY,
            language: 'en-Gb',
            limit:20,
            idxSet: 'POI'
        };

        var autocompleteOptions = {
        key: APIKEY,
        language: 'en-Gb'
        }

        var searchBoxOptions = {
            minNumberofCharacters: 3,
            searchOptions: searchOptions,
            autocompleteOptions: autocompleteOptions
        };

        var ttSearchBox = new tt.plugins.SearchBox(tt.services, searchBoxOptions);

        var updateSearchOptions = function() {
            let options = ttSearchBox.getOptions()
            options.searchOptions.boundingBox = map.getBounds()
            ttSearchBox.updateOptions(options)
            //console.log(options)
        }

        map.on('dragend', function() {
            updateSearchOptions()
        }) 

        map.on('load', function() {
            hidePOIInfo()
            var searchBoxHTML = ttSearchBox.getSearchBoxHTML()
            document.body.appendChild(searchBoxHTML)
            document.querySelector('.tt-side-panel__header').appendChild(ttSearchBox.getSearchBoxHTML())
             updateSearchOptions()
        });

        ttSearchBox.on('tomtom.searchbox.resultselected', function(event) {
            console.log(event.data)
            if (event.data.result.type == 'POI') {
                fetchPOIDetails(event.data.result)
            }
        })

    