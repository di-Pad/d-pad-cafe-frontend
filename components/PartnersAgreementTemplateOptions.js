import Image from 'next/image';
import { useState } from 'react';
import { Form, Input, Slider } from "formik-antd";
import 'antd/dist/antd.css';
import { Formik } from "formik";
import VerifyOwnershipModal from "../components/VerifyOwnershipModal";
import { createPartnersAgreement } from  '../api/contracts';

const PartnersAgreementTemplateOptions = (props) => {
  const [showModal, setShowModal] = useState(false);
  let userContractAddress = '';
  const userClickedUndo = () => {
    props.undoTemplateOption(true)
    return;
  };

  const toggleModal = (address) => {
    localStorage.setItem('contractAddress', address);
    userContractAddress = address;
    setShowModal(!showModal)
  };

  return (
    <>
      <Formik
        initialValues={{
          repaymentPercent: 0,
          totalReturn: 0,
        }}

        validate={(values) => {
          const errors = {};
          if (!values.skillOne) {
            errors.skillOne = "Required";
          } else if (!values.skillTwo) {
            errors.skillTwo = "Required";
          } else if (!values.skillThree) {
            errors.skillThree = "Required";
          }
          return errors;
        }}

        onSubmit={async (values) => {
          console.log(values);
          console.log('aaaaaaa');
          localStorage.setItem('skillOne', values.skillOne)
          localStorage.setItem('skillTwo', values.skillTwo)
          localStorage.setItem('skillThree', values.skillThree)
          localStorage.setItem('numberOfActions', values.numberOfActions)
          await createPartnersAgreement(props.template);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="top-row">
              <div className='template-card card-black'
                onClick={userClickedUndo}
              >
                <div className="top-card">
                  <Image className="image-7" src={props.headerImage} alt="card-logo" width="40" height="40" />

                  <div className="raleway-bold-alto-22px title-black-card">
                    {props.header}
                  </div>
                </div>

                <div className="description-black-card raleway-normal-alto-18px">
                  {props.description}
                </div>

                <Image className="line-26" src='/geometric-card-line-break.png' alt="line" width="40" height="2" />
              </div>

              <div className='template-card card-white'>
                <h3>Name 2/3 Roles/Skills</h3>
                <p>The Roles you envision in your community (i.e. dev, validator, etc.)</p>
                <Input
                  id="skillOne"
                  name="skillOne"
                  type="text"
                  onChange={handleChange}
                  placeholder="Role/Skill 1"
                  value={values.skillOne}
                  required />
                <Input
                  id="skillTwo"
                  name="skillTwo"
                  type="text"
                  onChange={handleChange}
                  placeholder="Role/Skill 2"
                  value={values.skillTwo}
                  required />
                <Input
                  id="skillThree"
                  name="skillThree"
                  type="text"
                  onChange={handleChange}
                  placeholder="Role/Skill 3"
                  value={values.skillThree}
                  required />
              </div>

              <div className='template-card card-white'>
                <h3>Nr. of Actions</h3>
                <p>How many initial Actions you expect. No worries, you can always add more later :)</p>
                <div className="auto-flex1">
                  <div className="number-1 raleway raleway-bold-black-14px">0</div>
                  {/* https://ant.design/components/slider/ */}
                  <Slider
                    name="numberOfActions"
                    min={0}
                    max={100}
                    color="black"
                    step={10}
                    onBlur={handleBlur}
                    value={values.numberOfActions}
                    className="repayment-percent-bar"
                  />
                  <div className="number-2 raleway raleway-bold-black-14px">100</div>
                </div>
              </div>
            </div>
            <div className="bottom-row">
              <div className="bootstrap-button">
                <p>Bootstrap your Community Economy</p>
              </div>

              <div className="integrate-button-panel">
                <button>
                  <p>Start from Scratch</p>
                  <Image src='/paper.svg' alt="white sheet of paper" width="40" height="40" />
                </button>

                <button onClick={toggleModal} className="importYourContract" type='button'>
                  <p>Import your Contract</p>
                  <Image src='/import-contract.svg' alt="black sheet of paper" width="40" height="40" />
                </button>
              </div>

              <button className="integrate-deploy" id="integrate-deploy"
                onClick={handleSubmit}
              // 'window' is undefined when I call Mumbai
              >
                Sign & Deploy 🚀
              </button>

            </div>
          </Form>
        )}
      </Formik>
      {showModal ? <VerifyOwnershipModal key={'verify'} toggleModal={toggleModal} /> : null}
    </>
  );
};

export default PartnersAgreementTemplateOptions;