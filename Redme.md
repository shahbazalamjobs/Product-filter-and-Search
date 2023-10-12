# Product Filter and Search

## Part 1

### HTML
1. In container div we have sidebar div and content div
2. In sidebar div we have logo, input text, category ul list div, input price range
3. In content div we have products div

### CSS
1. Set universal selector to 0 for margin and padding and box-sizing to border box
2. Set container width 95% and center it using margin: 0 auto, and display flex for easy layout adjustment
3. Set sidebar with flex: 1, on a child (like sidebar), it means it will take up all the available space along the main axis. But will change width when(e.g. if content flex: 4 then sidebar width will be 1/5 and content width 4/5)
4. Set sidebar input of type text with width 100% meaning it will take up the entire width of its container to make the input responsive and fill the available space.
5. outline: none; removes the default browser outline that is applied when an input element is focused. This is often done for aesthetic reasons or when a custom focus style is applied separately.
6. Set content flex: 4

### JS
1. Creating array of objects to fill the products data using object like id, name, img , amount, seller, category