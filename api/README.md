# Api Endpoints for meal Booking app


### SETUP

1. Download and install any of your preferred IDE

2. Download and install NodeJs

3. Download and install Git Bash

4. Download and install Postman

5. Download and install postgres pgAdmin4 (for database)


### INSTALLATION INSTRUCTION
1. clone or download this repository to any directory on local machine

2. open up Git bash terminal and CD (change directory) into the directory or
   right click on the repo folder and click on Git Bash here

3. cd into api folder

4. Enter ``` node_modules/.bin/sequelize db:migrate ``` on Git bash (terminal) and return ``` Enter ```


### DATABASE 
1. Run pgAdmin as ``` Administrator ``` to open the Graphical User Interface on browser

2. Create a database with name ``` mealApp ```


### HOW IT WORKS
1. Open up Git bash terminal and CD (change directory) into the directory or
   right click on the repo folder and click on Git Bash here

2. Run ``` npm start ``` to start the application server


### ENDPOINTS
- Open up Postman to test api endpoints
  -  Server runs on ``` localhost:3000 ```

<table>
<tr>
    <th>HTTP VERB</th>
	<th>ENDPOINT</th>
	<th>FUNCTIONALITY</th>
</tr>
<tr>
	<td>POST</td>
	<td>/auth/signup</td>
	<td>Register a user</td>
</tr>
<tr>
	<td>POST</td>
	<td>/auth/login</td>
	<td>Login a user</td>
</tr>
<tr>
	<td>GET</td>
	<td>/api/v1/meals</td>
	<td>Get all the meal options</td>
</tr>
<tr>
	<td>POST</td>
	<td>/api/v1/meals</td>
	<td>Add a meal option</td>
</tr>
<tr>
	<td>PUT</td>
	<td>/api/v1/meals/<mealId></td>
	<td>Update the information of a meal option</td>
</tr>
<tr>
	<td>DELETE</td>
	<td>/api/v1/meals/<mealId></td>
	<td>Remove a meal option</td>
</tr>
<tr>
	<td>POST</td>
	<td>/api/v1/menu</td>
	<td>Setup the menu for the day</td>
</tr>
<tr>
	<td>GET</td>
	<td>/api/v1/menu</td>
	<td>Get the menu for the day</td>
</tr>
<tr>
	<td>POST</td>
	<td>api/v1/orders</td>
	<td>Select the meal option from the menu</td>
</tr>
<tr>
<tr>
	<td>PUT</td>
	<td>/api/v1/orders/<orderId></td>
	<td>Modify an order</td>
</tr>
<tr>
	<td>GET</td>
	<td>/api/v1/orders</td>
	<td>Get all the orders</td>
</tr>
</table>



