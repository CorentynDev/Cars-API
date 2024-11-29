# Routes for Articles

## Routes Chart

| Method   | Route               | Description                                          | Params                    |
|----------|---------------------|------------------------------------------------------|---------------------------|
| `POST`   | `/api/articles`     | Add an article regarding a car, a brand or an event. | `title`, `images`, `tags` |
| `GET`    | `/api/articles`     | Lists available articles.                            |                           |
| `GET`    | `/api/articles/:id` | Get details concerning one article.                  |                           |
| `PUT`    | `/api/articles/:id` | Modify an existing article.                          | `title`, `images`, `tags` |
| `DELETE` | `/api/articles/:id` | Delete an article.                                   |                           |
