## Aura Vision Full Stack Developer Test

- This repo contains a front end app with a well defined structure
- It also contains a very very barebones express API server with no structure
- The app allows the user to search for flights

## Task 1

### Extend this front end application so that a user can search for available flights by date

- The user is looking for return flights, originating in London, that match their dates, but they don’t care where they go.
- All flights in the API response either originate from, or return to London
- Any flights you show must have matching return flights, e.g. only show flights to Barcelona if there are flights back from Barcelona on the selected return date
- Ensure any conventions already present in this FE app are followed
- Pay some attention to the UI/UX, e.g. how dates and times might be presented. We're looking for skills in being able to quickly present a view in a half-decent way, we're not looking for designers!

## Task 2

### Add a page in the FE to show details about one particular flight

- Allow the user to click through from the results of the search page you built in Task 1, to a page showing additional details like the flight duration and aircraft type.
- Pay some attention to the UI/UX, e.g. how data might be presented
- Ensure any conventions already present in this FE app are followed

## Task 3

### Extend the API so that it can accomodate queries

- Allow a client to query the flight data by origin, destination and/or dates
- The API side of this application is incredibly barebones on purpose because we're more interested in how you'd structure a back end service
