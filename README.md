## User Dashboard

You can checkout application here https://hre3l.csb.app/ (Temporarily deployed on codesandbox)

Displays registered users information

### Highlights:

- Light-weight react-based web application (cater to performance via code splitting, image optimzations)
- Responsive design without using third-party UI library which brings down package size
- Handles JWT token (creation &  expiration)
- Filter user information on age/name
- Proper error handling for edge cases like token expiration, invalid credentials, etc

### Possible Enhancements

- SignUp page redirection in case of error
- Add Pagination for large users list and query data accordingly (Performance improvements)
- Complete firebase deployments with domain integration
