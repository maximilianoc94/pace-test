Hi Pace Team!

I liked this assignment a lot, seemed simple at first but it became more challenger as I dig deeper. I'll answer the example questions straight ahead for simplicity.

## What choices did you make and why?

- I started with a CRA with the typescript template, it's what I'm most used to work with .

- I decided to build everything with Ant.design. Its a library that I'm familiar with.

- For academic purposes I decided not to go with the select-search component and implement it manually. It felt like using that component was a bit of cheating.

- I decided to fetch all the data in a single query (I explain why in the tradeoffs)

- I added a world map picture :) I didn't want to do a full width list because it looks weird, and having that empty space there was calling for a picture, It's not the best picture but I feel it was accurate.

## What challenges did you face?

Given the structure of the country list that was an array and given that I had to filter over that array I was stuck for a while thinking how could I filter without altering the main one (to keep indexes in place) and avoiding a duplicate array since its already a huge space in memory, I also wanted to keep a constant access time when selecting a country instead of searching in the array. So I came up with a component to filter over children while using the index of the original array to select a country.

## What tradeoffs did you choose?

I evaluated doing a single query with all data vs querying a list of country names and then query the selected country by ID. But since response time was kind of the same for each request I decided to just keep 1 request with all the data and handle everything in memory but this gave me the challenge I mentioned above.

I also thought about implementing a router to have different pages for the list and the country details. But I decided to handle both components as a single page with a state to switch. Since this is an exercise I didn't worry too much in the growing of the app.

## What do you like and not like about your solution?

I liked a lot the FilterableList component because I got to try something that I've never done before which is filtering over children properties. One thing that I didn't like and it happened because there was no way to filter by name in the countries API, is that I had to request the full list of countries and filter in memory. I would have liked to do a query with the filter instead.

Another thing I didn't like was this: The list of suggested results should disappear. I wanted to keep everything in a single page I think it'd offer better UX. But I understand that its an aggregated complexity to the challenge.

## What areas would you work on next?

- Unit testing is a must
- And in general I really like animating web pages so they feel more fluid and interactive. So I would've liked to spend more time doing transitions between components.
