import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import clsx from "clsx";

export default function ShowCalendly() {

    const [loaded, setLoaded] = useState(false);
    const url = "https://calendly.com/timthepost/30min?hide_gdpr_banner=1"

    useEffect(()=> {
        const calendlyScriptElement = document.createElement('script');
        calendlyScriptElement.src = "https://assets.calendly.com/assets/external/widget.js";
        calendlyScriptElement.addEventListener('load', ()=>setLoaded(true));
        document.body.appendChild(calendlyScriptElement);
    }, []);

    return (
        <section>
            <div className="container">
                <div className={styles.calendly}>
                    <div className="calendly-inline-widget" data-url={url}></div>
                </div>
            </div>
        </section>
    );

}