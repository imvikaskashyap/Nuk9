import React from "react";
import { FaLongArrowRight } from "react-icons/fa";
import "./InfoSection.scss";

function InfoSection() {
	return (
		<>
			<section className="title container">
				<div className="row">
					<div className="col-md-12">
						<h1>Destination for all InfoSec Compliances</h1>
						<div className="seperator1"></div>
					</div>
				</div>
			</section>

			<div className="container">
				<div className="row">
					<div className="col-md-6 item">
						<div className="item-in">
							<h4>Company...</h4>
							<div className="seperator"></div>
							<p>
								Information Systems plays an imperative role to make
								organizational success and create a brand image in minds of
								customers <br /> <br />
								NUK 9 Information Security Auditors LLP, commonly referred as,
								“NUK 9 Auditors”, leads into it. <br /> <br />
								India’s first LLP Company, driven professionally and fully
								Focused, Governed and Managed in the arena of Information
								Systems Security, GRC, Certification and Training Assurance
								Services
							</p>
							<a href="#">
								Read More
								{/* <FaLongArrowRight /> */}
							</a>
						</div>
					</div>
					<div className="col-md-6 item">
						<div className="item-in">
							<h4>Our Strength...</h4>
							<div className="seperator"></div>
							<p>
								Our Track record of extensive and exclusive 20+ years hands-on
								expertise in the field of IT Assurance, Consulting and
								Certification Assessment Services with vide industry and
								engagement exposures. Having consultants with industry reputed
								and globally accepted qualifications and certifications. <br />{" "}
								<br /> At NUK 9 Deliveries is always a Top Priority Our
								Expertise guarantees 100% improvement on the client’s Process,
								Security and Practices (PSP)
							</p>
							<a href="#">
								Read More
								{/* <FaLongArrowRight /> */}
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InfoSection;
