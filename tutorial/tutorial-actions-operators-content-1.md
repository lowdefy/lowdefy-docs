 If you have been following along, you can continue with your current config. Else, you can find the config from the previous section [here](tutorial-add-blocks-config).

## Reset Button

The reset button should reset all the user's inputs. To do this, we can add a reset action to the reset button. Copy the following into the definition of the reset button:

```yaml
pages:
  - id: booking
    # ...
    blocks:
      - id: content_card
        # ...
        blocks:
          - id: page_heading
            # ...
            # ...
            # ...
          - id: reset_button
            type: Button
            style:
              --span: 3
            properties:
              title: Reset
              block: true
              type: default
              Icon: ClearOutlined
################ -------- Copy from here -------- ################
            actions:
              onClick:
                - id: reset
                  type: reset()
################ ------- Copy to here ----------- ################
          - id: submit_button
            type: Button
            # ...
```

If you add some inputs into the form and click the reset button, those inputs should be cleared.

### What Happened

Each block defines a set of actions that it fires when a event happens. The button fires a event called `onClick` when it gets clicked. We can add a list of action definitions that will be executed sequentially when this action is fired. We only added one action, the `reset()` action, that resets the page context to the state it was in when it first loaded.



## Required Fields

We should validate the data users are submitting to make sure our app has clean data and works as expected. All of the fields in the form are compulosry, and the user should not be able to submit if they are not completed. To make this fields required, add a required property to all the input blocks like this:

```yaml
- id: title
  type: TextInput
  required: true
  properties:
    title: Meeting Name
```

A red star should appear next to each input field, looking like this: