# Inventory and Sales Management System Documentation
- This documentation provides instructions for testing the backend system for inventory and sales management locally.

## Setup
- Clone the Repository:Clone the repository containing the backend code to your local machine using the following command:
   `git clone <repository-url>`
- Install Dependencies:Navigate to the project directory and install the required dependencies using npm or 
- cd <project-directory>
- npm install
- Start MongoDB:Ensure that MongoDB is running locally on the default port (27017). If not, start MongoDB using the following command:
   `mongod`

   
## Testing Endpoints
- Start the Server:Start the backend server by running the following command:
- npm start
- The server will start running on http://localhost:3000 by default.


### Test Item Endpoints:
- Add New Item:Send a POST request to http://localhost:3000/items with JSON body containing item details (name, description, price, quantityAvailable) to add a new item to the inventory.
- Get All Items:Send a GET request to http://localhost:3000/items to retrieve a list of all items in the inventory.


### Test Bill Endpoints:
- Create a Bill:Send a POST request to http://localhost:3000/bills with JSON body containing bill details (items, totalAmount) to create a new bill for a sales transaction. Ensure that the items array contains objects with itemId and quantitySold fields.
- Get All Bills:Send a GET request to http://localhost:3000/bills to retrieve a list of all bills.
- Get Details of a Specific Bill:Send a GET request to http://localhost:3000/bills/:id (replace :id with the ID of the bill) to retrieve details of a specific bill along with the items sold.




Testing with API Client
You can use tools like Postman or curl to interact with the REST API endpoints and test different functionalities.  