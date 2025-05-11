import React from 'react'
import programming from '../assets/img/notes.svg'
import { Link } from 'react-router-dom'
import data from './data.json'
import { Search } from 'react-bootstrap-icons';

export default function Notes() {
	const [search, setSearch] = React.useState('')
	const [displayData, setDisplayData] = React.useState([])
	const [isDark, setIsDark] = React.useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
	React.useEffect(() => {
		document.title = 'Notes | VISTOFY'
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (event) => setIsDark(event.matches ? true : false);

		mediaQuery.addEventListener('change', handleChange);

		return () => {
			document.title = 'NOTES-TAT | VISTOFY'
			mediaQuery.removeEventListener('change', handleChange);
		}
	}, []);
	React.useEffect(() => {
		const searchquery = search.trim().toLowerCase();
		if (searchquery.length > 0) {
			setDisplayData(data.filter(item => item.tags.some(tag => tag.toLowerCase().includes(searchquery))))
		}
		else {
			setDisplayData(data)
		}
	}, [search])

	return (
		<>
		<div className="py-4 px-sm-5 px-4 cdin" style={{
    backgroundImage: ` url('https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // sample image URL
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}>
			<section className="py-4 px-sm-5 px-4 cdin" style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // sample image URL
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}>
				<div className="d-sm-flex align-items-center justify-content-between mainc">
					<div className="img-home">
						<h1 className="heading">NOTES<span></span></h1>
						<p className="lead my-4">
							The only notes that you you would ever need. <br />
						</p>
						B.Tech Syllabus
						<p className='text-var'>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1tDEfpGmiLjuT_QCfl42skYxPelJ3AMVS/view?usp=sharing" className=' text-var'>CSE</a>
							<span className='mx-2'>|</span>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1fE9qyvjlzPeW8PP7Kg_z8ySjkzxEtzQ9/view?usp=sharing" className=' text-var'>ECE</a>
							<span className='mx-2'>|</span>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1NHSTTkBaaDVOeoW9CkvCefDvcnbSVHju/view?usp=sharing" className=' text-var'>EEE</a>
							<span className='mx-2'>|</span>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1bcWrFey-AJjkuj--SD2OR7cynqpjAmgr/view?usp=sharing" className=' text-var'>EIE</a>
						</p>
						<p className="lead my-4">
							The only notes that you would ever need. <br />
						</p>
						MCA Syllabus
						<p className='text-var'>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1MCA_SAMPLE_LINK/view?usp=sharing" className='text-var'>Semester-wise PDF</a>
							<span className='mx-2'>|</span>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1MCA_SAMPLE_SUBJECTS/view?usp=sharing" className='text-var'>Subject List</a>
							<span className='mx-2'>|</span>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1MCA_SAMPLE_NOTES/view?usp=sharing" className='text-var'>Important Notes</a>
						</p>

						<p className="lead my-4">
							The only notes that you you would ever need. <br />
						</p>
						MBA Syllabus
						<p className='text-var'>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1tDEfpGmiLjuT_QCfl42skYxPelJ3AMVS/view?usp=sharing" className=' text-var'>CSE</a>
							<span className='mx-2'>|</span>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1fE9qyvjlzPeW8PP7Kg_z8ySjkzxEtzQ9/view?usp=sharing" className=' text-var'>ECE</a>
							<span className='mx-2'>|</span>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1NHSTTkBaaDVOeoW9CkvCefDvcnbSVHju/view?usp=sharing" className=' text-var'>EEE</a>
							<span className='mx-2'>|</span>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1bcWrFey-AJjkuj--SD2OR7cynqpjAmgr/view?usp=sharing" className=' text-var'>EIE</a>
						</p>
						<p className="lead my-4">
							The only notes that you you would ever need. <br />
						</p>
						B.sc Bio Technology Syllabus
						<p className='text-var'>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1tDEfpGmiLjuT_QCfl42skYxPelJ3AMVS/view?usp=sharing" className=' text-var'>CSE</a>
							<span className='mx-2'>|</span>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1fE9qyvjlzPeW8PP7Kg_z8ySjkzxEtzQ9/view?usp=sharing" className=' text-var'>ECE</a>
							<span className='mx-2'>|</span>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1NHSTTkBaaDVOeoW9CkvCefDvcnbSVHju/view?usp=sharing" className=' text-var'>EEE</a>
							<span className='mx-2'>|</span>
							<a target='_blank' rel="noreferrer"
								href="https://drive.google.com/file/d/1bcWrFey-AJjkuj--SD2OR7cynqpjAmgr/view?usp=sharing" className=' text-var'>EIE</a>
						</p>
					</div>
					<img className="img-fluid w-50 d-none d-sm-block" src={programming} alt="in office" />
				</div>
			</section>
			<div className='px-1 px-sm-5 mt-4'>
				<div className="container px-sm-5">
					<div className=" d-flex mb-3 justify-content-between">
						<input style={{
							userScalable: "no",
						}} type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Search here" onChange={
							React.useCallback((e) => setSearch(e.target.value), [])
						}
						/>
						<button type="btn submit" className="btn btn-text-var" style={{
							background: "none",
							outline: "dashed 1px",
							marginLeft: "10px",
							color: isDark ? "white" : "black",
						}}><Search /></button>
					</div>
					<ul style={{
						listStyleType: 'none',
						padding: '0px',
					}}>
						{displayData.map((item) => {
							return (
								<li className='my-1' key={item.id}>
									{item.year === true ?
										<>
											<h2>{item.name}</h2>
											<hr />
										</> :
										<Link to={`/previewnotes?id=${item.id}`}
											className='text-var notes-link'>
											{item.name}
										</Link>
									}
								</li>
							)
						}
						)}
					</ul>
				</div>
			</div>
			<div className='p-3 p-sm-5' style={{ fontSize: '0.8rem' }}>
				<a className='text-var' href='/community-guidelines'><b>Disclaimer</b></a>: Please go through our community guidelines for more information on contributions and sponsorships.
				<br />
				<Link to='/contributions' className='text-var'>Contribute to VISTOFY</Link>
			</div>
			</div>
		</>
	)
}