<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Search</title>
</head>
<body>
<form method="post">
    <fieldset>
        <legend>Product information</legend>
        <label for="fname">Name product:</label><br>
        <input type="text" id="fname" name="nameSearch"><br>
    </fieldset>
    <input type="submit" value="Submit"/>
</form>
<label><c:out value="${msgErr}"/>
</body>
</html>
