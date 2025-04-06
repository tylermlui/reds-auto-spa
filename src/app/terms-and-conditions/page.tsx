'use client'
import { Navbar } from "../../components/ui/navbar";
import { Footer } from "../../components/ui/footer";

export default function TandC() {

    return (
        <div className="bg-black">
            <Navbar/>
            <section className="mt-25 mb-30 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-white">
                    <h2 className="text-5xl font-bold text-center mb-6 mt-25 p-15">Terms and Conditions</h2>
                    <p className="text-gray-500 mb-6"><strong>Effective Date:</strong> 1/1/2025</p>

                    <p className="mb-6">
                    Welcome to <strong>Red's Auto Spa</strong>! These Terms and Conditions ("Terms") govern your use of our services. By booking a detailing service with us, you agree to these Terms.
                    </p>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">1. Services</h3>
                    <p className="text-gray-500">
                        We provide mobile detailing services that include, but are not limited to, exterior washing, interior cleaning, waxing, and vehicle protection treatments. Our services are provided at the location you specify during the booking process, such as your home, office, or another agreed-upon location.
                    </p>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">2. Booking and Payment</h3>
                    <ul className="list-inside list-disc text-gray-500">
                        <li><strong>Booking:</strong> To book a service, you must complete our online booking form or contact us directly. After booking, you will receive a confirmation email with the details of your appointment.</li>
                        <li><strong>Payment:</strong> Payment for services is due upon completion of the detailing service. We accept credit card payments through Square, as well as cash. All payments must be made in full before the service is considered complete.</li>
                    </ul>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">3. Customer Responsibilities</h3>
                    <ul className="list-inside list-disc text-gray-500">
                        <li><strong>Preparation:</strong> We recommend that you remove any personal items, valuables, or loose objects from your vehicle prior to our service. This allows us to focus on the detailing process. Failure to remove items may result in incomplete services.</li>
                        <li><strong>Access to Vehicle:</strong> You must ensure that our detailers can access your vehicle on the day of the service. If the vehicle is not accessible or is in an unsafe location, we reserve the right to cancel or reschedule the service.</li>
                    </ul>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">4. Cancellations and Rescheduling</h3>
                    <ul className="list-inside list-disc text-gray-500">
                        <li><strong>Cancellations:</strong> You may cancel your appointment up to <strong>3 hours</strong> before the scheduled service time without incurring any charges.</li>
                        <li><strong>Late Cancellations:</strong> If you cancel less than <strong>3 hours</strong> before the service, a <strong>$25</strong> cancellation fee will apply.</li>
                        <li><strong>Rescheduling:</strong> If you need to reschedule, please notify us at least <strong>12 hours</strong> in advance. We will do our best to accommodate your new preferred time.</li>
                    </ul>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">5. Service Limitations and Exclusions</h3>
                    <ul className="list-inside list-disc text-gray-500">
                        <li><strong>Weather Conditions:</strong> We reserve the right to cancel or reschedule your service in case of inclement weather (e.g., rain, snow, extreme temperatures) that would hinder the detailing process.</li>
                        <li><strong>Liability:</strong> While we take care to provide high-quality services, we are not responsible for pre-existing damage to your vehicle, including scratches, dents, or paint imperfections.</li>
                    </ul>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">6. Warranty and Satisfaction Guarantee</h3>
                    <p className="text-gray-500">We offer a satisfaction guarantee on our services. If you are not satisfied with the service, please contact us within 48 hours, and we will address any concerns or offer a re-service.</p>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">7. Privacy and Data Security</h3>
                    <p className="text-gray-500">We take your privacy seriously. Any personal information you provide during the booking process will be handled in accordance with our <a href="/privacy-policy" className="text-blue-600">Privacy Policy</a>.</p>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">8. Changes to Terms</h3>
                    <p className="text-gray-500">We may update these Terms from time to time. Any changes will be posted on our website with the updated effective date. Continued use of our services after changes are posted constitutes acceptance of the new Terms.</p>
                    </div>

                    <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">9. Governing Law</h3>
                    <p className="text-gray-500">These Terms are governed by the laws of California, United States. Any disputes arising from these Terms will be resolved in the courts of Los Angeles County.</p>
                    </div>

                    <div>
                    <h3 className="text-xl font-semibold mb-2">10. Contact Information</h3>
                    <p className="text-gray-500">For any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
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