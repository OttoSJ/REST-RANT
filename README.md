# REST-RANT

### SUMMARY

```
REST RANT is an app where users can review restaurants

```

### User Stories & Wireframes

```
1 As a standard user

- Navigate to each section of the website
- Add or delete places (restaurants)
- Leave a review and a comment of each place
- Leave your name on your review
- Need to be able to fill out the form with name

2 I need these features

- Ability to add new locations
- Ability to delete locations
- Leave a comment with review
- Track the comments and reviews
- Edit comments
- Leave a star rating with review
- Mark weather the comment is a rant
- Add a picture to the place
```

## LANGUAGES AND TOOLS

```
Express | Node.Js
CSS
React | JSX
Dependencies - express-react
```

### Routes

| Method | Path                     | Purpose                                                                       |
| ------ | ------------------------ | ----------------------------------------------------------------------------- |
| GET    | /                        | The Homes Page                                                                |
| GET    | /places                  | Index page listing all places                                                 |
| GET    | /places/new              | New from for a place                                                          |
| POST   | /places                  | Create a new place                                                            |
| GET    | /places/:id              | Show one place in detail(Associated rants, new rant form, delete rant button) |
| GET    | /places/:id/edit         | Edit form for a pace                                                          |
| PUT    | /places/:id              | Make changes to existing place                                                |
| DELETE | /places/:id              | Delete a place                                                                |
| POST   | /places/:id/rant         | Add rant to a place                                                           |
| DELETE | /places/:id/rant/:rantId | Delete a rant                                                                 |

## Database

### Places

| Field   | Type      |
| ------- | --------- |
| \_id    | Object ID |
| name    | String    |
| city    | String    |
| state   | String    |
| cusines | String    |
| pic     | String    |

### Rants

| Field    | Type                  |
| -------- | --------------------- |
| \_id     | Object ID             |
| place_id | ref(places) Object_id |
| rant     | Boolean               |
| ranting  | Number                |
| comment  | Sting                 |
| reviewer | String                |
