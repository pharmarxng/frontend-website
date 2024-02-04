import { Fade } from "react-awesome-reveal";

export default function Privacy() {
  return (
    <section className="privacy-page">
      <div className="w-11/12 mx-auto my-16 max-w-7xl">
        <div className="flex flex-col justify-center items-center ">
          <Fade direction="bottom-right">
            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                1. Introduction{" "}
              </h3>

              <p className="mb-4">
                Pharmarx Pharmacy Limited (
                <span className="font-bold">
                  Pharmarx, “We”, “Us”, or “Our”
                </span>
                ) is your one stop market for all your pharmaceutical needs. This Privacy
                Notice (“Notice”) governs your use of our Website:
                https://pharmarxng.com/ (“the Website) and your rights regarding our
                collection, use, storage, and protection of your data. Your
                privacy is important to us.
              </p>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl font-bold text-[#000] mb-4">
                2. Your Personal Data That We Process
              </h3>

              <p className="mb-4">
                Personal data means any information about an individual from
                which that person can be directly or indirectly identified.
                While using the Website, we may ask you to provide us with
                certain personal data directly to contact or identify you, and
                some automatically for our Website to function effectively. We
                also collect personal data through your use of our services or
                from third-party sources. The personal data we obtain include:
              </p>

              <ul className="list-disc px-10">
                <li className="mb-2">Your name;</li>
                <li className="mb-2">Your email address; </li>
                <li className="mb-2">Contact number; </li>
                <li className="mb-2">Location</li>
                <li className="mb-2">
                  The IP address used to connect your device to the internet for
                  identification purposes;
                </li>
                <li className="mb-2">Login email address and password;</li>
                <li className="mb-2">Bank details</li>
                <li className="mb-2">
                  Name of the internet service provider (ISP);
                </li>
                <li className="mb-2">Date and time of visit; and</li>
                <li className="mb-2">
                  Web pages visited, duration and frequency of visit.
                </li>
              </ul>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                3. Cookies{" "}
              </h3>
              <p className="mb-4">
                Cookies are tools used to collect information from you when you
                visit our Website automatically. We do not use any cookies on
                Our Website. Whenever we decide to use Cookies, we will provide
                you with a Cookies Notice.
              </p>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                4. Purpose Of Processing Your Data And The Lawful Basis{" "}
              </h3>
              <div className="border border-black grid grid-cols-2">
                <div className="border-b border-black p-2">
                  <p className="font-bold text-black">Purpose of Processing</p>
                </div>
                <div className="border-b border-l border-black p-2">
                  <p className="font-bold text-black">Lawful Bases</p>
                </div>

                <div className="p-2 border-r border-black">
                  <ul className="list-disc px-2 sm:px-5 lg:px-10">
                    <li className="mb-2">For the administration of our business</li>
                    <li className="mb-2">To develop and improve our service.</li>
                    <li className="mb-2">To help us to improve, customise or restructure our services</li>
                    <li className="mb-2">To enforce our terms of service and any terms and conditions of any other agreements for our services</li>
                    <li className="mb-2">To send marketing or promotional messages to existing customers</li>
                    <li className="mb-2">To secure your data and prevent fraud</li>
                    <li className="mb-2">To take statistical data for use internally</li> 
                  </ul>
                </div>
                <div className="p-2"> 
                  <p className="mb-4">Legitimate Interest</p>
                  <p>Processing your data is necessary for our legitimate interests or the legitimate interests of a third party, provided your rights and interests do not outweigh those interests.</p>
                </div>

                <div className="p-2 border-r border-t border-black">
                  <ul className="list-disc px-2 sm:px-5 lg:px-10">
                    <li className="mb-2">To provide our services to you</li>
                    <li className="mb-2">To register you as a user</li>
                    <li className="mb-2">To manage your account and profile</li>
                    <li className="mb-2">To authenticate you when you log in</li>
                    <li className="mb-2">To track your billing and payment history</li>
                    <li className="mb-2">To communicate with you and for customer support</li>
                    <li className="mb-2">To inform you whenever there are changes to our services</li> 
                    <li>To solve issues via live chat support, phone or email, including any bug fixing</li>
                  </ul>
                </div>
                <div className="p-2 border-t border-black"> 
                  <p className="mb-4">Contract</p>
                  <p>If your data processing is necessary for a contract you have with us or because we have asked you to take specific steps before entering into that contract.</p>
                </div>

                <div className="p-2 border-r border-t border-black">
                  <ul className="list-disc px-2 sm:px-5 lg:px-10">
                    <li className="mb-2">To send marketing communications to you</li>
                  </ul>
                </div>
                <div className="p-2 border-t border-black"> 
                  <p className="mb-4">Consent</p>
                </div>

                <div className="p-2 border-r border-t border-black">
                  <ul className="list-disc px-2 sm:px-5 lg:px-10">
                    <li className="mb-2">We may also process your data to fulfil legal requirements where needed.</li>
                  </ul>
                </div>
                <div className="p-2 border-t border-black"> 
                  <p className="mb-4">Legal obligation</p>

                  <p>
                  If processing your data is necessary where there is a statutory obligation on us.
                  </p>
                </div>

                <div className="p-2 border-r border-t border-black">
                  <ul className="list-disc px-2 sm:px-5 lg:px-10">
                    <li className="mb-2">To prevent fraud and crime on our platform</li>
                  </ul>
                </div>
                <div className="p-2 border-t border-black"> 
                  <p className="mb-4">Legitimate Interest</p>
                </div>
              </div>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                5. Your Rights As A Data Subject
              </h3>
              <p className="mb-5">
                The law vests you with certain rights—they include the right to
              </p>

              <p className="mb-2">
                a. access personal data we hold about you by requesting a copy
                of the personal data we hold about you;
              </p>
              <p className="mb-2">
                b. rectify such information where you believe it to be
                inaccurate;
              </p>
              <p className="mb-2">
                c. restrict the processing of your data in certain
                circumstances;
              </p>
              <p className="mb-2">
                d. object to the processing of your data where we intend to
                process such data for marketing purposes;
              </p>
              <p className="mb-2">
                e. where feasible, receive all personal data you have provided
                to us—in a structured, commonly used, and machine-readable
                format—and transmit the information to another data controller;
              </p>
              <p className="mb-2">
                f. request the erasure of your data (also known as the right to
                be forgotten);
              </p>
              <p className="mb-2">
                g. withdraw your consent to the processing of your personal
                data; and
              </p>
              <p className="mb-4">
                h. lodge a complaint with a relevant authority, where you have
                reason to believe that we have violated the term(s) of this
                Privacy Notice. (You may complain or seek redress from us within
                30 days from when you first detected the alleged violation.).
              </p>

              <p className="mb-4">
                You may seek to exercise any of the above rights at any time by
                sending us an email at{" "}
                <a
                  href="mailto:pharmarxng@gmail.com"
                  className="underline hover:text-primary-100"
                >
                  pharmarxng@gmail.com
                </a>
              </p>

              <p>
                The supervisory authority is the National Information Technology
                Development Agency (NITDA), and the complaint can be sent via
                email at{" "}
                <a
                  href="mailto:dpo@nitda.gov.ng"
                  className="underline hover:text-primary-100"
                >
                  dpo@nitda.gov.ng
                </a>
              </p>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                6. Who We Share Your Data With
              </h3>
              <p className="mb-4">
                We can share your data with the following third parties:
              </p>

              <ul className="px-2 md:px-5 lg:px-10 list-disc">
                <li className="mb-2">
                  Pharmarx’s subsidiaries and affiliated entities that provide
                  services, including conducting data processing on our behalf,
                  or for data verification, data centralisation, and logistics
                  purposes
                </li>
                <li className="mb-2">
                  Affiliated entities that provide payment processing services
                  on our behalf
                </li>
                <li className="mb-2">
                  Google: because we use various Google APIs and services on our
                  Website
                </li>
                <li className="mb-2">
                  Legal and Regulatory Authority – We disclose your data if we
                  believe it is reasonably necessary to comply with a law,
                  regulation, order, subpoena, audit, or to protect the safety
                  of any person, to address fraud, security or technical issues
                </li>
              </ul>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                7. Retention Of Your Data
              </h3>
              <p className="mb-4">
                Your personal data or any other information collected will be
                stored for as long as necessary to fulfil the purposes described
                in this Notice. However, we will also retain data subject to
                relevant provisions of applicable laws, resolve disputes, and
                enforce our legal agreements and policies. We delete your data
                for targeted marketing purposes once you unsubscribe from our
                marketing communications. Please note that your data may be
                retained for a more extended period, notwithstanding your
                request to remove your data, where there is a legal requirement
                to do so.
              </p>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                8. How Your Data Is Stored
              </h3>
              <p>
              We store and process your data on our server with AWS. We protect your data using physical, technical, and administrative security measures to reduce the risks of loss, misuse, unauthorised access, disclosure, and alteration. Some of the safeguards we use are firewalls and data encryption, physical access controls, and information access authorisation controls.
Where there is an actual or suspected data breach capable of causing harm to your rights and freedoms, we will notify you without undue delay and use our best effort to remedy the violation within one (1) month from the date we notify you.

              </p>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                9. International Transfer Of Data
              </h3>
              <p className="mb-4">
              To achieve the purposes described in this Notice, we may transfer your data to countries that may not offer an adequate protection level or are not considered to have sufficient law by the National Information Technology Development Agency (NITDA). Where personal data is to be transferred to a country outside Nigeria, we shall put adequate measures to ensure data security. 
Our data transfers to countries that do not offer an adequate protection level are subject to the conditions under the Nigeria Data Protection Regulation (NDPR). We will therefore only transfer Personal Data out of Nigeria on one of the following conditions:
              </p>

              <ul className="px-2 md:px-5 lg:px-10 list-disc">
                <li className="mb-2">Your consent has been obtained;</li>
                <li className="mb-2">The transfer is necessary for the performance of a contract between Us and you or implementation of pre-contractual measures taken at your request;</li>
                <li className="mb-2">The transfer is necessary to conclude a contract between Us and the third party in your interest;</li>
                <li className="mb-2">The transfer is necessary for reason of public interest;</li>
                <li className="mb-2">The transfer is for the establishment, exercise or defense of legal claims;</li>
                <li className="mb-2">The transfer is essential to protect your vital interests or other persons, where the Data Subject is physically or legally incapable of giving consent.</li>
              </ul>

              <p className="mt-4">
              To obtain any relevant information regarding any transfers of your Personal Data to third countries (including the appropriate transfer mechanisms), please contact us.
              </p>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                10. Marketing and Communications
              </h3>
              <p>
              We only send marketing communications to you with your consent. You may choose to opt out of our marketing emails by clicking on the ‘unsubscribe’ button at the bottom of the page. 
              </p>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                11. Security Of Your Data
              </h3>
              <p>
              We are very particular about preserving your privacy and protecting your data. We deploy all reasonable and appropriate technical and organisational measures to keep your data safe. However, we cannot completely guarantee the security of any information you transmit via our Website, as the internet is not an entirely secure place. We are committed to doing our best to protect you.
              </p>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                12. Complaints
              </h3>
              <p className="mb-4">
              If you are concerned about an alleged breach of privacy law or any other regulation by us, you can contact the Data Protection Officer (DPO) via <a href="mailto:pharmarxng@gmail.com" className="underline hover:text-primary-100">pharmarxng@gmail.com</a>. The DPO will investigate your complaint and provide information about how your complaint is handled.
              </p>

              <p>
              Please be informed that you may complain to the relevant data protection authority where your complaints are not satisfactorily addressed.
              </p>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                13. Changes To This Notice
              </h3>
              <p>
              We update our privacy notice from time to time. We will notify our users when we change it, and visitors will know this by checking the last date of update on this page whenever you visit.
              </p>
            </div>

            <div className="w-full text-sm text-gray-800 flex flex-col mb-8 md:text-base md:w-[80%] lg:w-[60%]">
              <h3 className="text-2xl mb-4 font-bold text-[#000]">
                14. Contact Us
              </h3>
              <p className="mb-4">
                If you have any questions relating to this Notice, you can reach us at <a href="mailto:pharmarxng@gmail.com" className="underline hover:text-primary-100">pharmarxng@gmail.com.</a>
              </p>
            </div>

          </Fade>
        </div>
      </div>
    </section>
  );
}