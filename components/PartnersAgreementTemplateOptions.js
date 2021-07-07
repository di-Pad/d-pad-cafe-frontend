import Image from 'next/image';

const PartnersAgreementTemplateOptions = (props) => {
    return (
        <div className="top-row">
                <div className='template-card-black'>
                    <div className="top-card">
                        <Image className="image-7" src={props.headerImage} alt="card-logo" width="40" height="40"/>

                        <div className="raleway-bold-alto-22px title-black-card">
                        {props.header}
                        </div>
                    </div>

                    <div className="description-black-card raleway-normal-alto-18px">
                        {props.description}
                    </div>

                    <Image className="line-26" src='/geometric-card-line-break.png' alt="line" width="40" height="2"/>
                </div>

                <div className='template-card-white'>
                    <h3>Name 2/3 Roles/Skills</h3>
                    <p>The Roles you envision in your community (i.e. dev, validator, etc.)</p>
                </div>

                <div className='template-card-white'>
                    <h3>Nr. of Actions</h3>
                    <p>How many initial Actions you expect. No worries, you can always add more later :)</p>
                </div>
        </div>
    );
};

export default PartnersAgreementTemplateOptions;