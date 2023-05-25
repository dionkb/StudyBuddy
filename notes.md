Add notes here as needed (pseudocode, acceptance criteria, grading criteria, etc.)

ROLES
    JENA
        - TOMTOM API 
        - MODELS
            - USERS
            - LOCATIONS
    JOSE
        - ROUTES (CONTROLLERS)
    JHONNY
        - SEEDS
            - Preseed with Orlando coffee/bookstores/parks/libraries/etc.
            - Use Mockaroo!! Can generate seeds based on your criteria
    QWENTIN
        - WIREFRAME
        - PUBLIC
            - JS 
                - login 
    DION
        - PUBLIC (CSS)
            - can use Bootstrap or similar to speed it along
            - we talked about using a lofi/synth/chillwave style of art?
            - ...
        - VIEWS (Makes sense to also work on this since it is closely related to the CSS)

    UNASSIGNED:
        PUBLIC
            JS 
            - logout
            - createAccount
            - ...
        VIEWS
            - main
            - homepage
            - user dashboard (where a future friends list could be added)
        README
            - could use README generator assignment?
        PRESENTATION SLIDES

MVP:
    User can create and account or log in
    User can GET data from db with info on locations containing [location, wifi?, outlets?, food?, best times?, etc.]
    User can POST the same stuff to add it to db for other users to look at
    User can PUT (update) to add/change reviews?

ACCEPTANCE CRITERIA:
    BACK-END
        ALREADY INCORPORATED: Use Node.js and Express.js to create a RESTful API.
        ALREADY INCORPORATED: Use Handlebars.js as the template engine.
        ALREADY INCORPORATED: Use MySQL and the Sequelize ORM for the database.
        **NEED: Have both GET and POST routes for retrieving and adding new data.
        **NEED: Use at least one new library, package, or technology that we haven’t discussed.
        DONE: Have a folder structure that meets the MVC paradigm.
        ALREADY PLANNED: Include authentication (express-session and cookies).
        DONE: Protect API keys and sensitive information with environment variables.
  
    FRONT-END
        **NEED: Have a polished UI.
        **NEED: Be responsive.
        **NEED: Be interactive (i.e., accept and respond to user input).  
    
    FINAL
        Be deployed using Heroku (with data).
        Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
        Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

    FUTURE DEVELOPMENT
        Add a random study tip on each reload like Jena said similar to NPM randomizer
        Expand the locations that can be used
        Expand the searchable criteria?
        Allow users to look for study partners who are studying the same thing? Dont get murdered?
        Add friends so you can look at their study spots and meet them (can allow live status, etc.)
    *** NEW IDEAS ***
        A roulette that chooses the location at random based on your search criteria, plus what music to listen to, plus a third thing (not sure what)

USE:
    TomTom API -- Add API Key to .env
    Mockaroo -- Build seeds!
