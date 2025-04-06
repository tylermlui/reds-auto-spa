'use client'
import { Navbar } from "../../components/ui/navbar";
import { Footer } from "../../components/ui/footer";

export default function TandC() {

    return (
        <div className="bg-black">
            <Navbar/>
            <section className="mt-25 mb-30 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-gray-800">
                    <h2 className="text-5xl text-white font-bold text-center mb-6 p-15">Privacy Policy</h2>
                    <p className="text-gray-500 mb-6"><strong>Effective Date:</strong> 1/1/2025</p>

                    <p className="mb-6 text-white">
                    At <strong>Red's Auto Spa</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
                    </p>

                    <div className="mb-6">
                    <h3 className="text-xl text-white font-semibold mb-2">1. Information We Collect</h3>
                    <p className="text-gray-500">
                        We collect personal information when you book a detailing service with us, including but not limited to:
                    </p>
                    <ul className="list-inside list-disc text-gray-500">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Payment details (e.g., credit card information)</li>
                        <li>Vehicle information (e.g., make, model, year)</li>
                    </ul>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">2. How We Use Your Information</h3>
                    <p className="text-gray-500">
                        The information we collect from you is used to:
                    </p>
                    <ul className="list-inside list-disc text-gray-500">
                        <li>Provide and manage our services, including confirming and scheduling appointments</li>
                        <li>Process payments for services rendered</li>
                        <li>Communicate with you regarding your booking, service updates, and promotions</li>
                        <li>Improve our services and customer experience</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">3. How We Protect Your Information</h3>
                    <p className="text-gray-500">
                        We take reasonable measures to protect your personal information, including using secure payment processing services and encryption for sensitive data. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee the absolute security of your information.
                    </p>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">4. Sharing Your Information</h3>
                    <p className="text-gray-500">
                        We do not sell or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our business, such as payment processors or marketing platforms, provided they agree to keep this information confidential and secure.
                    </p>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">5. Your Rights</h3>
                    <p className="text-gray-500">
                        You have the right to:
                    </p>
                    <ul className="list-inside list-disc text-gray-500">
                        <li>Access the personal information we hold about you</li>
                        <li>Request corrections to inaccurate or incomplete information</li>
                        <li>Request the deletion of your personal information, subject to legal requirements</li>
                        <li>Opt-out of marketing communications at any time by following the unsubscribe instructions in our emails</li>
                    </ul>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">6. Cookies and Tracking Technologies</h3>
                    <p className="text-gray-500">
                        We may use cookies and other tracking technologies to enhance your experience on our website. These tools help us analyze website usage, improve our content, and provide a personalized experience. You can manage your cookie preferences through your browser settings.
                    </p>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">7. Changes to This Privacy Policy</h3>
                    <p className="text-gray-500">
                        We may update this Privacy Policy from time to time. Any changes will be posted on our website with the updated effective date. Continued use of our services after changes are posted constitutes acceptance of the new Privacy Policy.
                    </p>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">8. Contact Information</h3>
                    <p className="text-gray-500">
                        If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:
                    </p>
                    <p className="text-gray-500">Red's Auto Spa</p>
                    <p className="text-gray-500">Email: <a href="mailto:sales@redsautospa.com" className="text-blue-600">sales@redsautospa.com</a></p>
                    <p className="text-gray-500">Phone: <a href="tel:+18053676565" className="text-blue-600">+1 (805) 367-6565</a></p>
                    <p className="text-gray-500">Website: <a href="https://redsautospa.com" className="text-blue-600">redsautospa.com</a></p>
                    </div>
                </div>
                </section>


            <Footer/>
        </div>


    );
}