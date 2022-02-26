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

# Third step

Now I refactored the logic I want to relocated in the domain part, more precisly in the selector part.
So let's do it.

I did not see I cannot touch the `getDomains` selector because this selector is used in other part of the application.
So I am reviewing my plans and I will split all 3 combobox in 3 components.
The idea is to isolate these 3 components and each component will use its own selector.
I would be great to achieve this as it will allows us to use them everywhere and they will be independent.
I will do 3 commits for each components.
let's go.