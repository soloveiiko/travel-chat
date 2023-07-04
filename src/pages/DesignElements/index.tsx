import FormContainer from '../../components/styled/FormContainer'
import PageContainer from '../../components/styled/PageContainer'

const DesignElements = () => {
  return (
    <PageContainer>
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
        <input type="password" placeholder="password" />
        <input type="date" />
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Checkbox</label>
        </div>
      </FormContainer>
    </PageContainer>
  )
}

export default DesignElements
