import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ShoppingContext } from '../ShoppingContextProvider'
import Loader from '../Loader'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function ModalProduct({ open, setOpen, info, addToCart }) {
	let { id, name, price, rating, reviewCount, description, img } = info

	const { loading } = useContext(ShoppingContext)

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as='div' open={open} className='relative z-30' onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div className='flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
							enterTo='opacity-100 translate-y-0 md:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 md:scale-100'
							leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
						>
							<Dialog.Panel className='flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl'>
								<div className='relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
									<button
										type='button'
										className='absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8'
										onClick={() => setOpen(false)}
									>
										<span className='sr-only'>Close</span>
										<FontAwesomeIcon
											icon='fa-solid fa-xmark'
											className='h-6 w-6'
											aria-hidden='true'
										/>
									</button>

									<div className='grid w-full grid-cols-1 items-center gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8'>
										<div className='aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5'>
											<img
												src={img}
												alt='alfajores chocomani y frutos rojos'
												className='object-cover object-center'
											/>
										</div>
										<div className='sm:col-span-8 lg:col-span-7'>
											<h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>
												{name}
											</h2>

											<section
												aria-labelledby='information-heading'
												className='mt-2'
											>
												<p className='text-2xl text-gray-900'>
													$ {price}
												</p>

												{/* Reviews */}
												<div className='mt-6'>
													<h4 className='sr-only'>
														Reviews
													</h4>
													<div className='flex items-center'>
														<div className='flex items-center'>
															{[
																0, 1, 2, 3, 4,
															].map(
																(
																	ratingProduct,
																	index
																) => (
																	<FontAwesomeIcon
																		icon='fa-solid fa-star'
																		key={
																			index
																		}
																		className={classNames(
																			rating >
																				ratingProduct
																				? 'text-gray-900'
																				: 'text-gray-200',
																			'h-5 w-5 flex-shrink-0'
																		)}
																		aria-hidden='true'
																	/>
																)
															)}
														</div>
														<p className='sr-only'>
															{rating} out of 5
															stars
														</p>
														<p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>
															{reviewCount}{' '}
															reviews
														</p>
													</div>
												</div>
											</section>

											<section
												aria-labelledby='options-heading'
												className='mt-10'
											>
												<h3
													id='options-heading'
													className='sr-only'
												>
													Product options
												</h3>

												<form>
													{/* Colors */}
													<div>
														<h4 className='text-lg font-medium text-gray-900'>
															Descripción
														</h4>

														<p>{description}</p>
													</div>
													<button
														onClick={async () => {
															await addToCart(id)
															setOpen(false)
														}}
														disabled={loading ? true : false}
														type='button'
														className='mt-6 flex w-full h-[60px] items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
													>
														{loading ? <Loader /> : <span>Agregar al Carrito</span>}
													</button>
												</form>
											</section>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
