Hi,

I will try to explain and keep track of my thought process in this file during 
the whole kata as if you were near me.

# First step

There is a lot going on here with almost no tests and
a big DomainFilter component and a lot of smell code.
As I don't have the time to understand the whole algorithms I will
use the golden master technic to refactor this logic.
I will make my unit test first to ensure I do not break anything and then refactor the code.
As I don't like enzyme for a lot of reasons I am installing React testing library. 
(I needed to update TS version to make it work.)
Let's do it!


# Second step

Now I am sure I cannot break anything, I am beginning the refactoring on the business logic contains 
by the DomainFilters component.

