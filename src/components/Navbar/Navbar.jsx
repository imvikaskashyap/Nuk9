import React, { useState } from "react";
import { links } from "./data";
import logo from "../../assets/logo_1.webp";
import "./Navbar.css";

const Navbar = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<header>
				<div>
					<div className="logo_name">
						<img className="logo" width={87} height={111} src={logo} alt="" />
						<h1>
							NUK 9 Information Security Auditors LLP <span>TM</span>
						</h1>
					</div>
					<p className="services">
						Governance | Risk | Compliance | Security | Coaching <br />{" "}
						Destination for all InfoSec Compliances
					</p>
				</div>
				<nav className={`${show ? "mobile-nav" : "list"}`}>
					<ul>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<li key={id}>
									{text === "services" ? (
										<div className="dropdown">
											<a href={url}>{text}</a>
											<div className="dropdown-content">
												<a href="#">System Audit Services</a>
												<a href="#">Risk Assessment Services</a>
												<a href="#">System Infiltration Assessment Services</a>
												<a href="#">
													Security Implementaiton, Assessment & Certification
												</a>
												<a href="#">Information Security Coaching Services</a>
											</div>
										</div>
									) : (
										<a href={url}>{text}</a>
									)}
								</li>
							);
						})}
					</ul>
				</nav>

				<div className="toggleBtn">
					<button onClick={() => setShow(!show)}>
						{show ? (
							<i className="fa fa-times"></i>
						) : (
							<i className="fa fa-bars"></i>
						)}
					</button>
				</div>
			</header>
		</>
	);
};

export default Navbar;
