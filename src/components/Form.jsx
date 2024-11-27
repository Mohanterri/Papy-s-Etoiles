import generateForm from '../functions/Form'

function Form(patern) {
  return (
    <div id="form-container">
        {generateForm(patern)}
    </div>
  )
}

export default Form
