import styles from '../styles/privacy.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
    return(
        <div className='container'>
        <Navbar />
        <div className={styles.Privacy}>
         
        <div className={styles.PrivacyContainer}>
        <div className={styles.PrivacyHeading}>
            <h1>Privacy Policy for Hearing Hope</h1>
        </div>
        <div className={styles.PrivacyDescription}>
            <p>At Hearing Hope, accessible from https://hearinghope.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Hearing Hope and how we use it.</p>
            <br/>
            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
            <br/>
            <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Hearing Hope. This policy is not applicable to any information collected offline or via channels other than this website. </p>
        </div>
        </div>

        <div className={styles.PrivacyContainer}>
        <div className={styles.PrivacyHeading}>
            <h1>Consent</h1>
        </div>
        <div className={styles.PrivacyDescription}>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
        </div>
        </div>

        <div className={styles.PrivacyContainer}>
        <div className={styles.PrivacyHeading}>
            <h1>Information we collect</h1>
        </div>
        <div className={styles.PrivacyDescription}>
            <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
            <br/>
            <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
            <br/>
            <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
        </div>
        </div>

        <div className={styles.PrivacyContainer}>
        <div className={styles.PrivacyHeading}>
            <h1>How we use your information</h1>
        </div>
        <div className={styles.PrivacyDescription}>
            <p>We use the information we collect in various ways, including to:</p>
            <br/>
            <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
            </ul>
        </div>
        </div>

        <div className={styles.PrivacyContainer}>
        <div className={styles.PrivacyHeading}>
            <h1>Log Files</h1>
        </div>
        <div className={styles.PrivacyDescription}>
            <p>Hearing Hope follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</p>
        </div>
        </div>

        <div className={styles.PrivacyContainer}>
        <div className={styles.PrivacyHeading}>
            <h1>Cookies and Web Beacons</h1>
        </div>
        <div className={styles.PrivacyDescription}>
            <p>Like any other website, Hearing Hope uses cookies. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors browser type and/or other information.</p>
        </div>
        </div>

        <div className={styles.PrivacyContainer}>
        <div className={styles.PrivacyHeading}>
            <h1>Advertising Partners Privacy Policies</h1>
        </div>
        <div className={styles.PrivacyDescription}>
            <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Hearing Hope.</p>
            <br/>
            <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Hearing Hope, which are sent directly to users browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
            <br/>
            <p>Note that Hearing Hope has no access to or control over these cookies that are used by third-party advertisers.</p>
        </div>
        </div>

        <div className={styles.PrivacyContainer}>
        <div className={styles.PrivacyHeading}>
            <h1>Third Party Privacy Policies</h1>
        </div>
        <div className={styles.PrivacyDescription}>
            <p>Hearing Hope Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
            <br/>
            <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites.</p>
        </div>
        </div>

        <div className={styles.PrivacyContainer}>
        <div className={styles.PrivacyHeading}>
            <h1>CCPA Privacy Rights (Do Not Sell My Personal Information)</h1>
        </div>
        <div className={styles.PrivacyDescription}>
            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <br/>
            <p>Request that a business that collects a consumers personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
            <br/>
            <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
            <br/>
            <p>Request that a business that sells a consumers personal data, not sell the consumers personal data.</p>
            <br/>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
        </div>
        </div>

        <div className={styles.PrivacyContainer}>
        <div className={styles.PrivacyHeading}>
            <h1>GDPR Data Protection Rights</h1>
        </div>
        <div className={styles.PrivacyDescription}>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <br/>
            <p>The right to access : You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
            <br/>
            <p>The right to rectification : You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
            <br/>
            <p>The right to erasure : You have the right to request that we erase your personal data, under certain conditions.</p>
            <br/>
            <p>The right to restrict processing : You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
            <br/>
            <p>The right to object to processing : You have the right to object to our processing of your personal data, under certain conditions.</p>
            <br/>
            <p>The right to data portability : You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
            <br/>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
        </div>
        </div>

        <div className={styles.PrivacyContainer}>
        <div className={styles.PrivacyHeading}>
            <h1>Children Information</h1>
        </div>
        <div className={styles.PrivacyDescription}>
            <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
            <br/>
            <p>Hearing Hope does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
        </div>
        </div>

        </div>
        <Footer />
        </div>
    )
}

export default Privacy;
