> You can find the final configuration files for this section [here](tutorial-actions-operators-config).

### What happened

We added a block to capture the number of attendees to the meeting, and then added a `validate` rule to the meeting room `Selector`. We use operators to calculate a value for the `pass` field of the validation rule. If the pass field receive a `true` value, the rule passes, else it fails. The operators execute every time the context changes.

We use the [`_state`](_state) operator to get the values of the `meeting_room` and `number_of_attendees` blocks from state.

We use the [`_eq`](_eq), [`_or`](_or), and [`_not`](_not) logical operators to make the comparisons needed to perform the test. In pseudocode, the logical test is:

```python
number_of_attendees == '8 - 12' or meeting_room != 'Boardroom'
```

The rule has a status of warning. This means it does not stop the action from continuing if it fails, displays with an orange highlight and shows up before the show validation flag has been set.



## Up next

While developing a app, you often need to be able to see what's happening 'behind the scenes'. In the next section we will look at how the [inspector](inspector) can help you do that.