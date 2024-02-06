# Subject 2 (2.5 pts)
# TOPIC: Javascript

# Given the following definition for a function `function decorate(func, name, extension)` the function receives as a parameter the object type `func` and adds the method `extension` to the type, accessible through the `name` key

# Detailed points:
- `func` must be a function. If another type is passed an `Error` must be thrown with the message `First parameter should be an object type`; (0.5 pts)
- `name` must be a `string` or a `String`. If another type is passed an `Error` must be thrown with the message `Second parameter should be a string`; (0.5 pts)
- `extension` must be a function. If another type is passed an `Error` must be thrown with the message `Third parameter should be a function`; (0.5 pts)
- the `extension` method exists on the decorated type; (0.5 pts)
- the `extension` method works correctly. (0.5 pts)