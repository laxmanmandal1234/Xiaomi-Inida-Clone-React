import React from "react";
import {repeatIcon, shieldIcon, mapIcon, youtubeIcon, twitterIcon, facebookIcon, instagramIcon} from "../svg/icons.js";
import "../styles/PreFooter.css";
import "../styles/Footer.css";


function Footer({footer}) {
    return(
        <>
            <div className="preFooter">
                <div>
                    {repeatIcon}
                    <p>
                        <b>Hassle-free replacement</b> <br />
                        10-days easy replacement policy on mi.com
                    </p>
                </div>
                <div>
                    {shieldIcon}
                    <p>
                        <b>100% secure payments</b> <br />
                        We support Crad, Wallet, EMI and COD
                    </p>
                </div>
                <div>
                    {mapIcon}
                    <p>
                        <b>Vast service network</b> <br />
                        1000 Mi-service centers across 600 cities
                    </p>
                </div>
            </div>

            <div className="preFooter2">
                <div>
                    <p>LET'S STAY IN TOUCH</p>
                    <span>Get updates on sales purchase and more</span>
                </div>
                <div>
                    <div>
                        <input type="email" name="email" placeholder="Enter your email" />
                        <button>{`>`}</button>
                    </div>
                </div>
                <div>
                    <p>FOLLOW ME</p>
                    <span>We want to hear from you!</span>
                </div>
                <div>
                    {facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon}
                </div>
            </div>

            <div className="footer">
                <div>
                    <p>SUPPORT</p>
                    {
                        footer.support.map((item, index) => {
                            return (
                                <a key={item.url} href={item.url} >{item.name}</a>
                            )
                        })
                    }
                </div>
                <div>
                    <p>SHOP AND LEARN</p>
                    {
                        footer.shopAndLearn.map((item, index) => {
                            return (
                                <a key={item.url} href={item.url} >{item.name}</a>
                            )
                        })
                    }
                </div>
                <div>
                    <p>RETAIL STORE</p>
                    {
                        footer.retailStore.map((item, index) => {
                            return (
                                <a key={item.url} href={item.url} >{item.name}</a>
                            )
                        })
                    }
                </div>
                <div>
                    <p>ABOUT US</p>
                    {
                        footer.aboutUS.map((item, index) => {
                            return (
                                <a key={item.url} href={item.url} >{item.name}</a>
                            )
                        })
                    }
                </div>
                <div>
                    <p>CONTACT US</p>
                    {
                        footer.contactUS.map((item, index) => {
                            return (
                                <a key={item.url} href={item.url} >{item.name}</a>
                            )
                        })
                    }
                </div>
                <div>
                    <div>
                        Chat with our Virtual AI Bot(24/7 Live Agent Support)
                    </div>
                    <button>
                        CHAT NOW
                    </button>
                </div>
            </div>
            <div className="footerBorder">
                <div> Copyright © 2010 - 2022 Xiaomi. All Rights Reserved</div>
            </div>
        </>
    );
}

export default Footer;