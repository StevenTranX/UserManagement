This should be the roadmap when you do any Deleting function in Management.
================================================> DELETE <=====================================================================

1. When you click on the Delete button, what will happen ?
   -> Delete button has the onClick function, and this one will trigger the handleDelete function above,
2. What will happen next when the handleDelete got triggered ?
   -> the handleDelete will be the async function to call API and delete user with specific Id.
   2a. How can I know specific Id ?
   -> well, just need to give parameters user.id in handleDelete at onClick function, next put userId on handleDelelte before render ()
   -> so user.id ============>> userId
3. But the changes just work on API server, how can I let UserManagement know to render users data back ?
   -> this.props at children component will pass information up to UsersManagement.
4. Final step ?
   -> The final step will REUPDATE the data on server, then reactjs will automatically update render back.
   -> pass {this.fetchUsers} into props onSuccessDelete
   ================================================> DELETE <=====================================================================
