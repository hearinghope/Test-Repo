import styles from "../styles/contact.module.css";

const ContactMaps = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "25px", marginTop: "55px", fontSize:'40px', color:'#ff6600' }}>
        Locations We Serve
      </h1>
      <div className={styles.mapsContainer}>
        {/* Map 1 */}
        <div className={styles.mapBox}>
          <div className={styles.mapHeading}>
            <h3>Rohini</h3>
          </div>
          <div className={styles.map}>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d449068.81226465234!2d76.747151!3d28.438861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015ab841a019%3A0xa4f57e1f9b3ae178!2sHearing%20Hope%20(A%20unit%20of%20Hope%20Enterprises)!5e0!3m2!1sen!2sin!4v1704545650910!5m2!1sen!2sin"
              width="400"
              height="250"
              style={{
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "15px",
                borderRadius: "7px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Map 2 */}
        <div className={styles.mapBox}>
          <div className={styles.mapHeading}>
            <h3>Safdarjung Enclave</h3>
          </div>
          <div className={styles.map}>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448558.78125473665!2d77.199104!3d28.558786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35be9d5c5bb%3A0x456863c709ee7d9b!2sHearing%20Hope!5e0!3m2!1sen!2sin!4v1704545666723!5m2!1sen!2sin"
              width="400"
              height="250"
              style={{
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "15px",
                borderRadius: "7px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Map 3 */}
        <div className={styles.mapBox}>
          <div className={styles.mapHeading}>
            <h3>Ghaziabad</h3>
          </div>
          <div className={styles.map}>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28001.035077077002!2d77.452379!3d28.685776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bf628a0e2d%3A0x1d40314174f98905!2sHearing%20Hope!5e0!3m2!1sen!2sin!4v1704545684238!5m2!1sen!2sin"
              width="400"
              height="250"
              style={{
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "15px",
                borderRadius: "7px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Map 4 */}
        <div className={styles.mapBox}>
          <div className={styles.mapHeading}>
            <h3>Rajinder Nagar</h3>
          </div>
          <div className={styles.map}>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448558.78125473665!2d77.199104!3d28.558786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35be9d5c5bb%3A0x456863c709ee7d9b!2sHearing%20Hope!5e0!3m2!1sen!2sin!4v1704545666723!5m2!1sen!2sin"
              width="600"
              height="300"
              style={{
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "15px",
                borderRadius: "7px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Map 5 */}
        <div className={styles.mapBox}>
          <div className={styles.mapHeading}>
            <h3>Vaishali</h3>
          </div>
          <div className={styles.map}>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28001.035077077002!2d77.452379!3d28.685776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bf628a0e2d%3A0x1d40314174f98905!2sHearing%20Hope!5e0!3m2!1sen!2sin!4v1704545684238!5m2!1sen!2sin"
              width="600"
              height="300"
              style={{
                border: "none",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "15px",
                borderRadius: "7px",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMaps;
