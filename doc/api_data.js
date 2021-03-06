define({ "api": [
  {
    "type": "post",
    "url": "/authenticate",
    "title": "Authenticate a user",
    "name": "Authenticate",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "auth",
            "description": "<p>User's authentication status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's generated token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"auth\": true,\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzcwZGY1MWZiOGUwMTc2ZjJjYTc0NiIsImlhdCI6MTU4NTAyODA5MH0.n81vsmQzYASecq1jJupFmUnFcS0LOp7qtHopA7JvBNc\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/authController.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/poll",
    "title": "Create new Poll",
    "name": "CreatePoll",
    "group": "Poll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of that Poll</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "options",
            "description": "<p>Descriptions of the possible options for vote</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success 201",
          "content": "HTTP/1.1 201 Created\n{\n  \"id\": \"5e770df51fb8e0176f2ca746\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pollController.js",
    "groupTitle": "Poll"
  },
  {
    "type": "post",
    "url": "/poll/:pollId/vote",
    "title": "Add a vote to an option of a Poll",
    "name": "CreateVote",
    "group": "Poll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":pollId",
            "description": "<p>Poll's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "optionId",
            "description": "<p>Option's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pollController.js",
    "groupTitle": "Poll"
  },
  {
    "type": "get",
    "url": "/poll/:id",
    "title": "Request Poll information",
    "name": "ShowPoll",
    "group": "Poll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>Poll's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Poll's unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of that Poll</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "options",
            "description": "<p>Possible options for vote</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.id",
            "description": "<p>Option's unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "options.description",
            "description": "<p>Description of the Option</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"5e799c16dfb8fe3b7f20d7f1\",\n    \"description\": \"desc\",\n    \"options\": [\n        {\n            \"id\": \"5e799c16dfb8fe3b7f20d7f2\",\n            \"description\": \"1\"\n        },\n        {\n            \"id\": \"5e799c16dfb8fe3b7f20d7f3\",\n            \"description\": \"2\"\n        },\n        {\n            \"id\": \"5e799c16dfb8fe3b7f20d7f4\",\n            \"description\": \"3\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pollController.js",
    "groupTitle": "Poll"
  },
  {
    "type": "get",
    "url": "/poll/:id/stats",
    "title": "Request Poll's viewing and voting statistics",
    "name": "ShowPollStats",
    "group": "Poll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User's unique access-token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>Poll's unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "views",
            "description": "<p># of times the Poll was viewed</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "votes",
            "description": "<p># of votes for each option</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "votes.optionId",
            "description": "<p>Option's unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "options.qty",
            "description": "<p># of votes of the Option</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n    \"views\": 1,\n    \"votes\": [\n        {\n            \"optionId\": \"5e799c16dfb8fe3b7f20d7f2\",\n            \"qty\": 0\n        },\n        {\n            \"optionId\": \"5e799c16dfb8fe3b7f20d7f3\",\n            \"qty\": 0\n        },\n        {\n            \"optionId\": \"5e799c16dfb8fe3b7f20d7f4\",\n            \"qty\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pollController.js",
    "groupTitle": "Poll"
  }
] });
