import PasswordField from '../../components/PasswordField'
import FormContainer from '../../components/FormContainer'

const DesignElements = () => {
  return (
    <>
      <FormContainer>
        <div>
          <h1 className="font-oleo text-center text-2xl">This Is a Font</h1>
        </div>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button disabled className="btn btn-primary">
          Disabled
        </button>
        <input type="text" placeholder="Text field" />
        <input disabled type="text" placeholder="Input disabled" />
        <PasswordField id="sdfsdffgd" />
        <input type="date" />
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Checkbox</label>
        </div>
      </FormContainer>
    </>
  )
}

export default DesignElements
