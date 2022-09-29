import './KnowledgeBase.scss';
import { useEffect, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, Input, Card } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function KnowledgeBase() {

    const cardHolderRef = useRef(null);

    const cardItems = Array.from(cardHolderRef?.current?.children || [])
        .filter(child => !child.textContent.includes('No results found'));

    const noResults = Array.from(cardHolderRef?.current?.children || [])
        .filter(child => child.textContent.includes('No results found'))[0];

    useEffect(() => { document.title = `Knowledge Base - ${defaultTitle}` }, []);

    const handleAskQuestionKeyUp = (e) => {

        const search = e.currentTarget.value.toLowerCase();

        if (search != "") {

            cardItems.forEach(item =>
                item.textContent.toLowerCase().includes(search)
                    ? item.style.display = ''
                    : item.style.display = 'none'
            )

        } else {

            noResults.classList.remove('no-items');
            cardItems.forEach(item => item.style.display = '');

        }

        let hasItems = cardItems.some(item => item.style.display !== 'none' ? true : false);

        if (hasItems) {

            noResults.classList.remove("no-items");

        } else {

            noResults.classList.add("no-items");

        }
        
    }

    return (
        <div className="container knowledge-base">
            <div className="row">
                <div className="col-12 mb-3"><h4>Knowledge Base</h4></div>
            </div>


            <div className="jumbotron bg-primary-opacity-3" style={{ backgroundImage: "url('assets/images/banner.png')" }}>
                <h2 className="text-primary text-center">Dedicated Source Used on Website</h2>
                <p className="mb-2 text-center">
                    <span>Popular searches: </span><span className="font-weight-bolder">Sales automation, Email marketing</span>
                </p>

                <div className="row mt-5">
                    <div className="col-lg-7 mx-auto">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><span className="material-icons">search</span></span>
                            </div>
                            <Input
                                className="form-control border-left-0"
                                id="search"
                                placeholder="Ask a question"
                                onKeyUp={handleAskQuestionKeyUp}
                            ></Input>
                        </div>
                    </div>
                </div>
            </div>


            <div ref={cardHolderRef} className="row cards-holder">
                <div className="col-6 col-lg-4 h-100 mb-3 card-item">
                    <Card className="card simple">
                        <div className="card-body text-center">
                            <img src="assets/images/sales.svg" alt="" />

                            <h4 className="mt-3">Sales Automation</h4>
                            <p>There is perhaps no better demonstration of the folly of image of our tiny world.</p>
                            <Button className="primary outlined small">Learn More</Button>
                        </div>
                    </Card>
                </div>

                <div className="col-6 col-lg-4 h-100 mb-3 card-item">
                    <Card className="card simple">
                        <div className="card-body text-center">
                            <img src="assets/images/marketing.svg" alt="" />

                            <h4 className="mt-3">Marketing Automation</h4>
                            <p>Look again at that dot. That’s here. That’s home. That’s us. On it everyone you love.</p>
                            <Button className="primary outlined small">Learn More</Button>
                        </div>
                    </Card>
                </div>

                <div className="col-6 col-lg-4 h-100 mb-3 card-item">
                    <Card className="card simple">
                        <div className="card-body text-center">
                            <img src="assets/images/api.svg" alt="" />

                            <h4 className="mt-3">API Questions</h4>
                            <p>Every hero and coward, every creator and destroyer of civilization.</p>
                            <Button className="primary outlined small">Learn More</Button>
                        </div>
                    </Card>
                </div>

                <div className="col-6 col-lg-4 h-100 mb-3 card-item">
                    <Card className="card simple">
                        <div className="card-body text-center">
                            <img src="assets/images/personalization.svg" alt="" />

                            <h4 className="mt-3">Personalization</h4>
                            <p>It has been said that astronomy is a humbling and character experience.</p>
                            <Button className="primary outlined small">Learn More</Button>
                        </div>
                    </Card>
                </div>

                <div className="col-6 col-lg-4 h-100 mb-3 card-item">
                    <Card className="card simple">
                        <div className="card-body text-center">
                            <img src="assets/images/email.svg" alt="" />

                            <h4 className="mt-3">Email Marketing</h4>
                            <p>There is perhaps no better demonstration of the folly of human conceits.</p>
                            <Button className="primary outlined small">Learn More</Button>
                        </div>
                    </Card>
                </div>

                <div className="col-6 col-lg-4 h-100 mb-3 card-item">
                    <Card className="card simple">
                        <div className="card-body text-center">
                            <img src="assets/images/demand.svg" alt="" />

                            <h4 className="mt-3">Demand Generation</h4>
                            <p>Competent means we will never take anything for granted.</p>
                            <Button className="primary outlined small">Learn More</Button>
                        </div>
                    </Card>
                </div>

                <div className="col-12 col-lg-12 h-100 mb-3 no-result text-center">
                    <h4>No results found</h4>
                </div>
            </div>

        </div >
    )
}

export default withAnimation(KnowledgeBase)