import './Chat.scss';

import { useEffect } from 'react';

import withAnimation from '../../hoc/withAnimation';

import { ListBox, Button, Input } from '../../smartImports';

import { defaultTitle } from '../../contexts/themeContext';
import { useRef } from 'react';

function Chat() {

    const chatBody = useRef(null);

    useEffect(() => {

        document.title = `Chat - ${defaultTitle}`;

        if (chatBody.current) {

            chatBody.current.scrollTop =
                chatBody.current.scrollHeight - chatBody.current.offsetHeight;

        }

    }, []);

    return (
        <div className="container chat-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Chat Messages</h4></div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div ref={chatBody} className="card-body py-0">
                            <div className="chat-holder">
                                <ListBox id="listBox" filterable filter-input-placeholder="Search contacts..." item-template="contactTemplate">
                                    <smart-list-item class="online" missed='3'>Eva Hayes</smart-list-item>
                                    <smart-list-item class="online">Joyce Scott</smart-list-item>
                                    <smart-list-item class="online" selected>Victoria Ramos</smart-list-item>
                                    <smart-list-item class="offline" missed='1'>Frederick Murphy</smart-list-item>
                                    <smart-list-item class="offline">Zack Turner</smart-list-item>
                                </ListBox>
                                <div id="mainChatView">
                                    <div className="chat-header">
                                        <div className="avatar avatar-recipient"></div>
                                        <div>
                                            <div>Victoria Ramos</div>
                                            <div><em>Typing...</em></div>
                                        </div>
                                        <Button className="primary px-4"><span className="material-icons">phone</span></Button>
                                        <Button className="success px-4"><span className="material-icons">videocam</span></Button>
                                        <Button className="px-4"><span className="material-icons">settings</span></Button>
                                    </div>
                                    <div className="chat-body" id="chatBody">
                                        <div className="message">
                                            <div className="avatar"></div>
                                            <div className="timestamp">1:31 pm</div>
                                            <div className="text">
                                                <div>Victoria Ramos</div>
                                                <div>Class aptent taciti 🥰</div>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <div className="avatar"></div>
                                            <div className="timestamp">1:32 pm</div>
                                            <div className="text">
                                                <div>Victoria Ramos</div>
                                                <div>Nunc efficitur neque sit amet varius scelerisque. Phasellus in arcu felis. Etiam
                                                    tellus tortor, pharetra id justo placerat, dapibus convallis quam. Sed at semper
                                                    nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus
                                                    feugiat ipsum velit, ac interdum urna tempus vitae. Ut diam lectus, volutpat sed
                                                    nisl ac, ullamcorper luctus tellus.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="message me">
                                            <div className="avatar"></div>
                                            <div className="timestamp">1:34 pm</div>
                                            <div className="text">
                                                <div>John Doe</div>
                                                <div>Nulla eget tortor tempor justo egestas scelerisque scelerisque nec diam.</div>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <div className="avatar"></div>
                                            <div className="timestamp">1:35 pm</div>
                                            <div className="text">
                                                <div>Victoria Ramos</div>
                                                <div>Phasellus in arcu felis.</div>
                                            </div>
                                        </div>
                                        <div className="message me">
                                            <div className="avatar"></div>
                                            <div className="timestamp">1:36 pm</div>
                                            <div className="text">
                                                <div>John Doe</div>
                                                <div>Donec purus est, commodo in molestie et, vestibulum a enim. Mauris dolor neque.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <div className="avatar"></div>
                                            <div className="timestamp">1:40 pm</div>
                                            <div className="text">
                                                <div>Victoria Ramos</div>
                                                <div>Duis molestie, sem eu bibendum sollicitudin, ex ex hendrerit purus, et ultrices
                                                    nisl velit sit amet sem.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="message me">
                                            <div className="avatar"></div>
                                            <div className="timestamp">1:41 pm</div>
                                            <div className="text">
                                                <div>John Doe</div>
                                                <div>Aenean et eleifend mi?</div>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <div className="avatar"></div>
                                            <div className="timestamp">1:42 pm</div>
                                            <div className="text">
                                                <div>Victoria Ramos</div>
                                                <div>Тaciti 😀😀😀</div>
                                            </div>
                                        </div>
                                        <div className="message me">
                                            <div className="avatar"></div>
                                            <div className="timestamp">1:54 pm</div>
                                            <div className="text">
                                                <div>John Doe</div>
                                                <div>Class aptent taciti...</div>
                                            </div>
                                        </div>
                                        <div className="message me">
                                            <div className="avatar"></div>
                                            <div className="timestamp">2:02 pm</div>
                                            <div className="text">
                                                <div>John Doe</div>
                                                <div>Suspendisse cursus nunc ac felis rhoncus tincidunt 😇</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="chatFooter">
                                        <Input placeholder="Your message here..."></Input>
                                        <Button className="primary">Send</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(Chat)