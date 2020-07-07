
Let's create a page for a form where users can book a meeting room. Copy the definition of the `booking` page below into your `lowdefy.yaml` file and save file so the CLI uploads it.

```
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
    blocks:
      - id: content_card
        type: Card
        style:
          maxWidth: 600px
        blocks:
          - id: page_heading
            type: Title
            properties:
              content: Book a meeting room
              level: 3
################ ------- Copy to here ----------- ################
```