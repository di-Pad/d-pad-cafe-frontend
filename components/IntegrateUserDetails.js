import React, { useState } from "react";
import Image from "next/image";
import { Form, Input, Slider } from "formik-antd";
import 'antd/dist/antd.css';
import { Formik } from "formik";
import VerifyOwnershipModal from "./VerifyOwnershipModal";
import { createPartnersAgreement } from '../api/contracts';
import { pushImage } from '../api/textile.hub';

const IntegrateUserDetails = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [key, setKey] = useState('');
    const [avatarUrl, setAvatarUrl] = useState(null);
    const { TextArea } = Input;
    let userContractAddress = '';

    const MAX_UPLOAD_SIZE = 1024; // bytes
    const ALLOWED_FILE_TYPES = 'image.*';

    const userClickedUndo = () => {
        props.undoTemplateOption(true)
        return;
    };

    const toggleModal = (address) => {
        localStorage.setItem('contractAddress', address);
        userContractAddress = address;
        setShowModal(!showModal)
    };

    const onInputChange = async (files) => {
        if (files.length === 1) {
            const imageFile = files[0];
            if (!checkFileSize(imageFile.size)) {
                console.error('Maximum file size exceeded. Max file size is: ' + MAX_UPLOAD_SIZE);
                return false;
            }
            else if (!checkFileType(imageFile.type)) {
                console.error('File type is not allowed');
                return false;
            }
            const imageUrl = await pushImage(imageFile);
            localStorage.setItem('imageUrl', imageUrl);
            uploadImage(imageFile);
        } else {
            console.error(files.length === 0 ? 'No image uploaded' : 'You can oonly upload one image at a time');
            return false;
        }
    }

    const uploadImage = (files) => {
        const reader = new FileReader();

        reader.onload = () => {
            setAvatarUrl(reader.result)
        };

        reader.onerror = (err) => {
            console.error('something went wrong...', err);
        };
        reader.readAsDataURL(files);
    }

    const checkFileSize = (size) => {
        return (size / MAX_UPLOAD_SIZE / MAX_UPLOAD_SIZE) <= MAX_UPLOAD_SIZE;
    }

    const checkFileType = (type) => {
        return type.match(ALLOWED_FILE_TYPES).length > 0;
    }

    return (
        <>
            <Formik
                initialValues={{
                    skillOne: '',
                    skillTwo: '',
                    skillThree: '',
                    numberOfActions: 10,
                    avatar: '',
                    description: '',
                    name: ''
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
                    if (!values.numberOfActions)
                        values.numberOfActions = 10;

                    const partnersKey = await createPartnersAgreement(
                        props.selectedTemplate,
                        values.name,
                        values.description,
                        [values.skillOne, values.skillTwo, values.skillThree],
                        values.numberOfActions
                    );
                    setKey(partnersKey);
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
                        <div className="integrate-user-sidebar">
                            <h2>This is your <u>Community.</u> Tell <u>your</u> people all about it ????</h2>

                            <Image src="/d-pad-logo.png" alt="d-pad logo" width="100" height="100"></Image>

                            <div className="user-details-fields">

                                <div>
                                    <div>
                                        <h4>Name</h4>
                                        <TextArea
                                            id="name"
                                            name="name"
                                            type="text"
                                            // onChange={handleChange}
                                            placeholder="Show off with a great Community Name!"
                                            value={values.name}
                                            required
                                        ></TextArea>
                                    </div>

                                    <p>4 characters left</p>
                                </div>


                                <div className="avatar-field">
                                    <div>
                                        <h4>Avatar</h4>
                                        <p>{"Your public Logo - that's how others will know it's really you"}</p>
                                    </div>

                                    {!avatarUrl ? <label htmlFor="file" >
                                        <div className="avatar-upload-div">
                                            <Image className="line-26" src="https://skillwallet-demo-images.s3.us-east-2.amazonaws.com/upload_avatar.svg" alt="line" width="40" height="20" />
                                            <input type="file" name="files[]" id="file" accept="image/*" onChange={(event) => onInputChange(event.target.files)}></input>
                                            <p>.svg , .png, or .jpg</p>
                                        </div>
                                    </label> :
                                        <div className="avatar-div">
                                            <Image className="line-26" src={avatarUrl} alt="line" width="40" height="40" />
                                        </div>
                                    }
                                </div>

                                <div>
                                    <div>
                                        <h4>Description</h4>
                                        <TextArea
                                            id="description"
                                            name="description"
                                            type="text"
                                            // onChange={handleChange}
                                            placeholder="Introduce your community to the world. It can be your one-liner, its values, its goals, or even the story behind it!"
                                            value={values.description}
                                            required
                                        ></TextArea>
                                    </div>
                                    <p>280 characters left</p>
                                </div>
                            </div>
                        </div>

                        <div className="integrate-content">
                            <div className="integrate-header">
                                <h2 style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Partner&#39;s Agreement</h2>
                                <h4>Select the template that best represents your project / protocol.</h4>
                            </div>

                            <div className="integrate-template-content">
                                <div className="top-row">
                                    <div className='template-card card-black'
                                        onClick={userClickedUndo}>
                                        <div className="top-card">
                                            <Image className="image-7" src={props.templateOptions.imageSrc} alt="card-logo" width="40" height="40" />

                                            <div className="raleway-bold-alto-22px title-black-card">
                                                {props.templateOptions.header}
                                            </div>
                                        </div>

                                        <div className="description-black-card raleway-normal-alto-18px">
                                            {props.templateOptions.description}
                                        </div>

                                        <Image className="line-26" src='/geometric-card-line-break.png' alt="line" width="40" height="2" />
                                    </div>

                                    <div className='template-card card-white'>
                                        <h3>Name 2/3 Roles/Skills</h3>
                                        <p>The Roles you envision in your community (i.e. dev, validator, etc.)</p>
                                        <Input
                                            id="role"
                                            name="skillOne"
                                            type="text"
                                            onChange={handleChange}
                                            placeholder="Role/Skill 1"
                                            value={values.skillOne}
                                            style={{ text: 'white' }}
                                            required />
                                        <Input
                                            id="role"
                                            name="skillTwo"
                                            type="text"
                                            onChange={handleChange}
                                            placeholder="Role/Skill 2"
                                            value={values.skillTwo}
                                            style={{ text: 'white' }}
                                            required />
                                        <Input
                                            id="role"
                                            name="skillThree"
                                            type="text"
                                            onChange={handleChange}
                                            placeholder="Role/Skill 3"
                                            value={values.skillThree}
                                            style={{ text: 'white' }}
                                            required />
                                    </div>

                                    <div className='template-card card-white'>
                                        <h3>Nr. of Actions</h3>
                                        <p>How many initial Actions you expect. No worries, you can always add more later :)</p>

                                        <div className="auto-flex1">

                                            <div className="bar-chart-first-container">
                                                <input className="bar-chart-container" name="numberOfActions" onBlur={handleBlur}
                                                    onChange={handleChange} type="range" id="numberOfActions" value={values.numberOfActions}
                                                    min="10" max="100"></input>
                                                <div className="bar-chart-metrics">
                                                    <p>10</p>
                                                    <p>100</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bottom-row">

                                    <div className="bootstrap-button">
                                        <p>Bootstrap your Community Economy</p>
                                    </div>

                                    <div className="integrate-button-panel">
                                        <button type="button">
                                            <p>Start from Scratch</p>
                                            <Image src='/paper.svg' alt="white sheet of paper" width="40" height="40" />
                                        </button>

                                        <button onClick={toggleModal} className="importYourContract" type='button'>
                                            <p>Import your Contract</p>
                                            <Image src='/import-contract.svg' alt="black sheet of paper" width="40" height="40" />
                                        </button>
                                    </div>

                                    <button className="integrate-deploy" id="integrate-deploy" type="submit"
                                    // 'window' is undefined when I call Mumbai
                                    >
                                        Sign & Deploy ????
                                    </button>

                                </div>



                                {key ? <div id="topDiv">
                                    <div id="modalWindow">
                                        <div className="modal-window-child">
                                            <div className="wallet-header">
                                                <h2 style={{ textDecoration: "underline" }}>Partners Key: </h2>
                                            </div>
                                            <div className="wallet-header">
                                                <p style={{ textDecoration: "underline", color: 'white' }}>{key} </p>
                                            </div>

                                        </div>
                                    </div>
                                </div> : undefined}
                            </div>
                        </div>
                    </Form>
                )}

            </Formik>
            {showModal ? <VerifyOwnershipModal key={'verify'} toggleModal={toggleModal} /> : null}
        </>
    )
}

export default IntegrateUserDetails;