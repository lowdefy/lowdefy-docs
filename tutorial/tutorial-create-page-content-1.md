
Let's create a page for a form where users can book a meeting room.

##### Step 1
Copy the definition of the `booking` page below into your `lowdefy.yaml` file and save file so the CLI uploads it.

```yaml
pages:
  - id: welcome
    type: PageHeaderMenu
    blocks:
      - id: content_card
        type: Card
        blocks:
          - id: title
            type: Title
            properties:
              content: Hello World
################ -------- Copy from here -------- ################
  - id: booking
    type: PageHeaderMenu
    properties:
      title: Book meeting
    layout:
      contentJustify: center # Center the contents of the page
    blocks:
      - id: content_card
        type: Card
        layout:
          size: 800 # Set the size of the card so it does not fill the full screen
          contentGutter: 16 # Make a 16px gap between all blocks in this card
        blocks:
          - id: page_heading
            type: Title
            properties:
              content: Book a meeting room # Change the title on the page
              level: 3 # Make the title a little smaller (an html `<h3>`).
################ ------- Copy to here ----------- ################
```