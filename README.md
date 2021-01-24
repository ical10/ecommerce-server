# ecommerce-server

This server is built with test suites with TDD.

### Products

**Create Product**
----

* **URL**
  /products

* **Method:** 
  `POST`

*  **URL Params**

    None

* **Data Params**
    
    **Content:** `{ 
    name: 'nice headset',
    image_url: 'https://media.wired.com/photos/5e7164aeb9399f00096a2ae6/1:1/w_1800,h_1800,c_limit/Gear-Mont-Blanc-Smart-Headphones-Gold-Front-SOURCE-Mont-Blanc.jpg',
    price: 120000,
    stock: 5,
    category: 'electronics'
    }
    `

* **Success Response:**
  
  * **Code:** 201 OK <br />
      **Content:** `{ 
      id: 1,
      name: 'nice headset',
      image_url: 'https://media.wired.com/photos/5e7164aeb9399f00096a2ae6/1:1/w_1800,h_1800,c_limit/Gear-Mont-Blanc-Smart-Headphones-Gold-Front-SOURCE-Mont-Blanc.jpg',
      price: 120000,
      stock: 5,
      category: 'electronics',
      updatedAt: '2021-01-18T10:38:05.747Z',
      createdAt: '2021-01-18T10:38:05.747Z'
      }
      `

* **Error Response:**

  * **Code:** 401 Unauthorised <br />
      **Content:** `{
      'errors': [
        'Not authorised'
      ]
      }
      `
    OR

  * **Code:** 400 Bad Request <br />
      **Content:** `{
      'errors': [
        'Name required',
        'Image_url required',
        'Price required',
        'Stock required'
      ]
      }
      `

    OR

  * **Code:** 400 Bad Request <br />
      **Content:** `{
      'errors': [
        'Price must be greater than zero',
        'Stock must be greater than zero'
      ]
      }
      `
    OR

  * **Code:** 400 Bad Request <br />
      **Content:** `{
      'errors': [
        'Price must be a valid number',
        'Stock must be a valid number'
      ]
      }
      `
    OR

  * **Code:** 400 Bad Request <br />
      **Content:** `{
      'errors': [
        'Name must contain only alphanumeric characters'
      ]
      }
      `
    OR

  * **Code:** 400 Bad Request <br />
      **Content:** `{
      'errors': [
        'Image_url must contain a url'
      ]
      }
      `
    OR

  * **Code:** 400 Bad Request <br />
  **Content:** `{
  'errors': [
    'Number too big'
  ]
  }
  `

    OR

  * **Code:** 400 Bad Request <br />
  **Content:** `{
  'errors': [
    'Max characters for string exceeded'
  ]
  }
  `

* **Sample Call:**

    `localhost:3000/products`


**Update Product**
----

* **URL**
  /products/:id

* **Method:** 
  `PUT`

*  **URL Params**

    `id=[integer]`

* **Data Params**
    
    **Content:** `{ 
    name: 'nice headset',
    image_url: 'https://media.wired.com/photos/5e7164aeb9399f00096a2ae6/1:1/w_1800,h_1800,c_limit/Gear-Mont-Blanc-Smart-Headphones-Gold-Front-SOURCE-Mont-Blanc.jpg',
    stock: 3,
    price: 200000
    }
    `

* **Success Response:**
  
  * **Code:** 201 OK <br />
      **Content:** `{ 
      id: 1,
      name: 'nice headset',
      image_url: 'https://media.wired.com/photos/5e7164aeb9399f00096a2ae6/1:1/w_1800,h_1800,c_limit/Gear-Mont-Blanc-Smart-Headphones-Gold-Front-SOURCE-Mont-Blanc.jpg',
      price: 200000,
      stock: 3,
      updatedAt: '2021-01-18T10:38:05.747Z',
      createdAt: '2021-01-18T10:38:05.747Z'
      }
      `

* **Error Response:**

  * **Code:** 401 Unauthorised <br />
      **Content:** `{
      'errors': [
        'Not authorised'
      ]
      }
      `
    OR

  * **Code:** 400 Bad Request <br />
      **Content:** `{
      'errors': [
        'Price must be greater than zero',
        'Stock must be greater than zero'
      ]
      }
      `
    OR

  * **Code:** 400 Bad Request <br />
      **Content:** `{
      'errors': [
        'Name must contain only alphanumeric characters'
      ]
      }
      `
    OR

  * **Code:** 400 Bad Request <br />
      **Content:** `{
      'errors': [
        'Image_url must contain a url'
      ]
      }
      `

    OR

  * **Code:** 400 Bad Request <br />
  **Content:** `{
  'errors': [
    'Number too big'
  ]
  }
  `

    OR

  * **Code:** 400 Bad Request <br />
  **Content:** `{
  'errors': [
    'Max characters for string exceeded'
  ]
  }
  `

**Fetch All Products**
----

* **URL**
  /products

* **Method:** 
  `GET`

*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**
  
    * **Code:** 200 <br />
    **Content:** `[
    {
          id: 1,
        name: 'nice headphones',
        image_url: 'https://media.wired.com/photos/5e7164aeb9399f00096a2ae6/1:1/w_1800,h_1800,c_limit/Gear-Mont-Blanc-Smart-Headphones-Gold-Front-SOURCE-Mont-Blanc.jpg',
        price: 120000,
        stock: 5,
        category: 'electronics',
    updatedAt: '2021-01-18T10:38:05.747z',
    createdAt: '2021-01-18T10:38:05.747Z'
    },
    {
          id: 2,
        name: 'macbook pro',
        image_url: 'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-13..1588802180.jpg',
        price: 2000000,
        stock: 1,
        category: 'electronics',
    updatedAt: '2021-01-18T10:38:05.747Z',
    createdAt: '2021-01-18T10:38:05.747Z'
    }
  ]`
 
* **Error Response:**

    None

* **Sample Call:**

    `localhost:3000/products`

**Fetch A Product by Id**
----

* **URL**
  /products/:id

* **Method:** 
  `GET`

*  **URL Params**

    `id=[integer]`

* **Data Params**

    None

* **Success Response:**
  
    * **Code:** 200 <br />
    **Content:** `
    {
          id: 1,
        name: 'nice headphones',
        image_url: 'https://media.wired.com/photos/5e7164aeb9399f00096a2ae6/1:1/w_1800,h_1800,c_limit/Gear-Mont-Blanc-Smart-Headphones-Gold-Front-SOURCE-Mont-Blanc.jpg',
        price: 120000,
        stock: 5,
        category: 'electronics',
    updatedAt: '2021-01-18T10:38:05.747z',
    createdAt: '2021-01-18T10:38:05.747Z'
    }`
 
* **Error Response:**

    None

* **Sample Call:**

    `localhost:3000/products/1`

**Delete A Product by Id**
----

* **URL**
  /products/:id

* **Method:** 
  `DELETE`

*  **URL Params**

    `id=[integer]`

* **Data Params**

    None

* **Success Response:**
  
  * **Code:** 200 <br />
      **Content:** `{
      'confirmDelete':
          [
            'Product deleted'
          ]     
      }
      `
 
* **Error Response:**

  * **Code:** 401 <br />
      **Content:** `{
      'errors': 
        [
        'Not authorised'
        ]
      }
      
      `

* **Sample Call:**

    `localhost:3000/products/1`


### Users

**Login**
----

* **URL**
  /login

* **Method:** 
  `POST`

*  **URL Params**

    None

* **Data Params**
    
    **Content:** `{ 
    email: 'admin@mail.com',
    password: 'thisisnotapassword'
    }
    `

* **Success Response:**
  
  * **Code:** 200 OK <br />
      **Content:** `{ 
      access_token: <random_access_token_here>
      }
      `

* **Error Response:**

  * **Code:** 401 Unauthorised <br />
      **Content:** `{
       'errors':   
          [
           'Wrong email / password'
          ]
      }`

    OR

  * **Code:** 400 Bad Request <br />
      **Content:** `{
      'errors': [
        'Email / password must be filled'
      ]
      }
      `

    OR

  * **Code:** 404 Bad Request <br />
      **Content:** `{
      'errors': [
      'Not found'
      ]
      }
      `

* **Sample Call:**

    `localhost:3000/login`
