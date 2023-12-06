import { Clock, Home, Mail, Phone } from 'lucide-react';
import ContactForm from './components/contact-form';

export default async function ContactPage() {
	return (
		<div className="px-4 flex flex-col md:flex-row-reverse md:gap-20 lg:gap-32 md:justify-end md:px-16">
			<div className="flex flex-col gap-2">
				<div className="text-2xl mt-6 mb-2 md:mt-16">
					<p>contacts</p>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Home className="w-4 h-4" />
					</div>
					<div>
						<p>33-velyka-vasylkivska-street-kyiv-ukraine</p>
					</div>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Phone className="w-4 h-4" />
					</div>
					<div>
						<p>telephone: +380 (73) 429-65-29</p>
					</div>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Mail className="w-4 h-4" />
					</div>
					<div>
						<p>email: dronotorba@gmail.com</p>
					</div>
				</div>
				<div className="flex flex-row gap-2 items-center">
					<div>
						<Clock className="w-4 h-4" />
					</div>
					<div>
						<p>work-schedule: 10:00 - 18:00</p>
					</div>
				</div>
			</div>
			<ContactForm />
		</div>
	);
}
