# Grocery App

This project is created in order to improve the knowledge in React and reinforce the good practices in JS.

## Objective:
Create an app that helps to manage the groceries list from a kitchen. It should provide to the user the information about the current stock list of the kitchen, and the pending items to buy, and a list where we can find the pending items:

    - Make a login user screen
    - Display the list of current items:
        - The items should be filtered by category:
            - Fruit and vegetables
            - Cleaning items
            - Snacks
            - Meat
            - Others
        - Mark as yellow the items that are about to expire / running out.
            - Not all items have expiration date
            - Some items are count by percentage and others by counts
        - Mark as red the items that are already expired or we don't have any of them
    - Display the list of pending items:
        - This list should show only the pending and expired items
        - The items will have a checkbox, and when this is checked the item will remove from the list and reset the default values from the item.
        - It also will display a list of stores that sell all the category that are on the list.
    - Display items details:
        - You can edit the name of the item, the category, the expiration date (if applicable), and the default stock (could be percentage or count)
        - You can remove items or add new ones (if is a new item it will be added to the pending items too)
    - Display stores details
        - Name
        - Description
        - Categories available
        - Address

## Requirements:
The app must be done in Reacy. The concepts that you need to use in this exercise 

	- Component Thinking
	- Routing
	- Filters
	- State and statefull components
	- Redux (optional but probably needed)
	- Forms

------
