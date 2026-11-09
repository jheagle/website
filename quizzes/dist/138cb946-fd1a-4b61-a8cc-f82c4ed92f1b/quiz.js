import form from '../components/form.js?v=9c0cfa1177'
import radios from '../templates/radios.js?v=9170ddc863'
import textArea from '../components/textArea.js?v=d3a10a8504'
import div from '../components/div.js?v=24c7355f9c'
import label from '../components/label.js?v=137626c089'
import fieldset from '../components/fieldset.js?v=9139f217b0'
import main from '../components/main.js?v=dc7e3a7c15'
import submit from '../components/submit.js?v=cb23c6b9c5'
import footer from '../components/footer.js?v=f0fa678d12'

/**
 * Generates a menu with the provided index as the currently selected item.
 * @returns {DomItem}
 */
const quiz = () => [main([div([form(null, null, [div([fieldset('These are radios', [radios('radio-options', [{
  label: 'Never',
  id: 'never',
  value: 'never'
}, {
  label: 'Every couple years',
  id: 'couple-years',
  value: 'couple-years'
}, {
  label: 'Once a year',
  id: 'once-year',
  value: 'once-year'
}, {
  label: 'Every couple months',
  id: 'couple-months',
  value: 'couple-months'
}, {
  label: 'Once a month',
  id: 'once-month',
  value: 'once-month'
}, {
  label: 'Every couple weeks',
  id: 'couple-weeks',
  value: 'couple-weeks'
}, {
  label: 'Once a week',
  id: 'once-week',
  value: 'once-week'
}, {
  label: 'Every couple days',
  id: 'couple-days',
  value: 'couple-days'
}, {
  label: 'Daily',
  id: 'daily',
  value: 'daily'
}])]), fieldset('Three more radios', [radios('yes-maybe-no', [{
  label: 'Yes',
  id: 'yes',
  value: 'yes'
}, {
  label: 'Sometimes',
  id: 'sometimes',
  value: 'sometimes'
}, {
  label: 'No',
  id: 'no',
  value: 'no'
}])]), div([fieldset('More radios', [radios('more-thigns', [{
  label: 'Something',
  id: 'something',
  value: 'something'
}, {
  label: 'Other',
  id: 'other',
  value: 'other'
}]), div([label('Provide any additional explanation if you want.', 'additional-context'), textArea('additional-context', [], null, {
  id: 'additional-context'
})])])], 'follow-up', {
  id: 'follow-up'
})]), div([submit()], 'form-footer')])], 'form-wrapper')]), footer()]
export default quiz
