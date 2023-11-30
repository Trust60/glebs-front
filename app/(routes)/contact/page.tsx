import { Clock, Home, Mail, Phone } from 'lucide-react';
import ContactForm from './components/contact-form';

const ContactPage = () => {
	return (
		<div className="px-4 flex flex-col md:flex-row-reverse md:gap-20 lg:gap-32 md:justify-end md:px-16">
			<div className="flex flex-col gap-2">
				<div className="text-2xl mt-6 mb-2 md:mt-16">
					<p>Contacts</p>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Home className="w-4 h-4" />
					</div>
					<div>
						<p>33 Velyka Vasylkivska Street, Kyiv, Ukraine</p>
					</div>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Phone className="w-4 h-4" />
					</div>
					<div>
						<p>Telephone: +38 098 123 1212</p>
					</div>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Mail className="w-4 h-4" />
					</div>
					<div>
						<p>Email: mail@gamil.com</p>
					</div>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Clock className="w-4 h-4" />
					</div>
					<div>
						<p>Work schedule: 10:00 - 18:00</p>
					</div>
				</div>
			</div>
			<ContactForm />
		</div>
	);
};

export default ContactPage;
