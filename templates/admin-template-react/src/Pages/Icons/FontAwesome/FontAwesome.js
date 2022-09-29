import './FontAwesome.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { defaultTitle } from '../../../contexts/themeContext';

function FontAwesome() {

    useEffect(() => { document.title = `Font Awesome - ${defaultTitle}` }, []);

    return (
        <div className="container font-awesome-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Font Awesome</h4></div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h4 className="label">The web's most popular icon set and toolkit.</h4>
                </div>
                <div className="card-body">
                    <div id="iconsContainer">
                        <div>
                            <i className="fas fa-fw fa-ad"></i> <span>ad</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-address-book"></i> <span>address-book</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-address-card"></i> <span>address-card</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-adjust"></i> <span>adjust</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-air-freshener"></i> <span>air-freshener</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-align-center"></i> <span>align-center</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-align-justify"></i> <span>align-justify</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-align-left"></i> <span>align-left</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-align-right"></i> <span>align-right</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-allergies"></i> <span>allergies</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-ambulance"></i> <span>ambulance</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-american-sign-language-interpreting"></i>
                            <span>american-sign-language-interpreting</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-anchor"></i> <span>anchor</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-angle-double-down"></i> <span>angle-double-down</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-angle-double-left"></i> <span>angle-double-left</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-angle-double-right"></i> <span>angle-double-right</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-angle-double-up"></i> <span>angle-double-up</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-angle-down"></i> <span>angle-down</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-angle-left"></i> <span>angle-left</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-angle-right"></i> <span>angle-right</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-angle-up"></i> <span>angle-up</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-angry"></i> <span>angry</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-ankh"></i> <span>ankh</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-apple-alt"></i> <span>apple-alt</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-archive"></i> <span>archive</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-archway"></i> <span>archway</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-alt-circle-down"></i> <span>arrow-alt-circle-down</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-alt-circle-left"></i> <span>arrow-alt-circle-left</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-alt-circle-right"></i> <span>arrow-alt-circle-right</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-alt-circle-up"></i> <span>arrow-alt-circle-up</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-circle-down"></i> <span>arrow-circle-down</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-circle-left"></i> <span>arrow-circle-left</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-circle-right"></i> <span>arrow-circle-right</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-circle-up"></i> <span>arrow-circle-up</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-down"></i> <span>arrow-down</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-left"></i> <span>arrow-left</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-right"></i> <span>arrow-right</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrow-up"></i> <span>arrow-up</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrows-alt"></i> <span>arrows-alt</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrows-alt-h"></i> <span>arrows-alt-h</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-arrows-alt-v"></i> <span>arrows-alt-v</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-assistive-listening-systems"></i>
                            <span>assistive-listening-systems</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-asterisk"></i> <span>asterisk</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-at"></i> <span>at</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-atlas"></i> <span>atlas</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-atom"></i> <span>atom</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-audio-description"></i> <span>audio-description</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-award"></i> <span>award</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-backspace"></i> <span>backspace</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-backward"></i> <span>backward</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-balance-scale"></i> <span>balance-scale</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-ban"></i> <span>ban</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-band-aid"></i> <span>band-aid</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-barcode"></i> <span>barcode</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bars"></i> <span>bars</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-baseball-ball"></i> <span>baseball-ball</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-basketball-ball"></i> <span>basketball-ball</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bath"></i> <span>bath</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-battery-empty"></i> <span>battery-empty</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-battery-full"></i> <span>battery-full</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-battery-half"></i> <span>battery-half</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-battery-quarter"></i> <span>battery-quarter</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-battery-three-quarters"></i> <span>battery-three-quarters</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bed"></i> <span>bed</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-beer"></i> <span>beer</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bell"></i> <span>bell</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bell-slash"></i> <span>bell-slash</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bezier-curve"></i> <span>bezier-curve</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bible"></i> <span>bible</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bicycle"></i> <span>bicycle</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-binoculars"></i> <span>binoculars</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-birthday-cake"></i> <span>birthday-cake</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-blender"></i> <span>blender</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-blind"></i> <span>blind</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bold"></i> <span>bold</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bolt"></i> <span>bolt</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bomb"></i> <span>bomb</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bone"></i> <span>bone</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bong"></i> <span>bong</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-book"></i> <span>book</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-book-open"></i> <span>book-open</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-book-reader"></i> <span>book-reader</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bookmark"></i> <span>bookmark</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bowling-ball"></i> <span>bowling-ball</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-box"></i> <span>box</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-box-open"></i> <span>box-open</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-boxes"></i> <span>boxes</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-braille"></i> <span>braille</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-brain"></i> <span>brain</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-briefcase"></i> <span>briefcase</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-briefcase-medical"></i> <span>briefcase-medical</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-broadcast-tower"></i> <span>broadcast-tower</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-broom"></i> <span>broom</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-brush"></i> <span>brush</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bug"></i> <span>bug</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-building"></i> <span>building</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bullhorn"></i> <span>bullhorn</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bullseye"></i> <span>bullseye</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-burn"></i> <span>burn</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bus"></i> <span>bus</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-bus-alt"></i> <span>bus-alt</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-business-time"></i> <span>business-time</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-calculator"></i> <span>calculator</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-calendar"></i> <span>calendar</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-calendar-alt"></i> <span>calendar-alt</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-calendar-check"></i> <span>calendar-check</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-calendar-minus"></i> <span>calendar-minus</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-calendar-plus"></i> <span>calendar-plus</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-calendar-times"></i> <span>calendar-times</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-camera"></i> <span>camera</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-camera-retro"></i> <span>camera-retro</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cannabis"></i> <span>cannabis</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-capsules"></i> <span>capsules</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-car"></i> <span>car</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-car-alt"></i> <span>car-alt</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-car-battery"></i> <span>car-battery</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-car-crash"></i> <span>car-crash</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-car-side"></i> <span>car-side</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-caret-down"></i> <span>caret-down</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-caret-left"></i> <span>caret-left</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-caret-right"></i> <span>caret-right</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-caret-square-down"></i> <span>caret-square-down</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-caret-square-left"></i> <span>caret-square-left</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-caret-square-right"></i> <span>caret-square-right</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-caret-square-up"></i> <span>caret-square-up</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-caret-up"></i> <span>caret-up</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cart-arrow-down"></i> <span>cart-arrow-down</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cart-plus"></i> <span>cart-plus</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-certificate"></i> <span>certificate</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chalkboard"></i> <span>chalkboard</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chalkboard-teacher"></i> <span>chalkboard-teacher</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-charging-station"></i> <span>charging-station</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chart-area"></i> <span>chart-area</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chart-bar"></i> <span>chart-bar</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chart-line"></i> <span>chart-line</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chart-pie"></i> <span>chart-pie</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-check"></i> <span>check</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-check-circle"></i> <span>check-circle</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-check-double"></i> <span>check-double</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-check-square"></i> <span>check-square</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chess"></i> <span>chess</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chess-bishop"></i> <span>chess-bishop</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chess-board"></i> <span>chess-board</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chess-king"></i> <span>chess-king</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chess-knight"></i> <span>chess-knight</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chess-pawn"></i> <span>chess-pawn</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chess-queen"></i> <span>chess-queen</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chess-rook"></i> <span>chess-rook</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chevron-circle-down"></i> <span>chevron-circle-down</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chevron-circle-left"></i> <span>chevron-circle-left</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chevron-circle-right"></i> <span>chevron-circle-right</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chevron-circle-up"></i> <span>chevron-circle-up</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chevron-down"></i> <span>chevron-down</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chevron-left"></i> <span>chevron-left</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chevron-right"></i> <span>chevron-right</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-chevron-up"></i> <span>chevron-up</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-child"></i> <span>child</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-church"></i> <span>church</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-circle"></i> <span>circle</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-circle-notch"></i> <span>circle-notch</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-city"></i> <span>city</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-clipboard"></i> <span>clipboard</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-clipboard-check"></i> <span>clipboard-check</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-clipboard-list"></i> <span>clipboard-list</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-clock"></i> <span>clock</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-clone"></i> <span>clone</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-closed-captioning"></i> <span>closed-captioning</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cloud"></i> <span>cloud</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cloud-download-alt"></i> <span>cloud-download-alt</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cloud-upload-alt"></i> <span>cloud-upload-alt</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cocktail"></i> <span>cocktail</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-code"></i> <span>code</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-code-branch"></i> <span>code-branch</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-coffee"></i> <span>coffee</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cog"></i> <span>cog</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cogs"></i> <span>cogs</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-coins"></i> <span>coins</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-columns"></i> <span>columns</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-comment"></i> <span>comment</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-comment-alt"></i> <span>comment-alt</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-comment-dollar"></i> <span>comment-dollar</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-comment-dots"></i> <span>comment-dots</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-comment-slash"></i> <span>comment-slash</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-comments"></i> <span>comments</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-comments-dollar"></i> <span>comments-dollar</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-compact-disc"></i> <span>compact-disc</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-compass"></i> <span>compass</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-compress"></i> <span>compress</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-concierge-bell"></i> <span>concierge-bell</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cookie"></i> <span>cookie</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cookie-bite"></i> <span>cookie-bite</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-copy"></i> <span>copy</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-copyright"></i> <span>copyright</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-couch"></i> <span>couch</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-credit-card"></i> <span>credit-card</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-crop"></i> <span>crop</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-crop-alt"></i> <span>crop-alt</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-cross"></i> <span>cross</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-crosshairs"></i> <span>crosshairs</span>
                        </div>
                        <div>
                            <i className="fas fa-fw fa-crow"></i> <span>crow</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(FontAwesome)