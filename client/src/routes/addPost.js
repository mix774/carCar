import React, { useEffect } from "react";
import { TextField, Button, Stack, Select, MenuItem, InputLabel } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddPost() {

	const [model, setModel] = useState('')
	const [type, setType] = useState('')
	const [brand, setBrand] = useState('')
	const [year, setYear] = useState('')
	const [amountOfOwners, setAmountOfOwners] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')
	const [mileage, setMileage] = useState('')
	const [brands, setBrands] = useState([])
	const [types, setTypes] = useState([])
	const [models, setModels] = useState([])

	const navigate = useNavigate()

	const onModelChange = (e) => {
		setModel(e.target.value)
		const selectedModel = models.find((model) => model._id === e.target.value)
		if (!selectedModel.types || selectedModel.types.lenght === 0) {
			console.log(`Типы у модели ${selectedModel.name} не заданы`);
		} else {
			setTypes(selectedModel.types)
		}
	}
	const onTypeChange = (e) => setType(e.target.value)
	const onBrandChange = (e) => setBrand(e.target.value)
	const onYearChange = (e) => setYear(e.target.value)
	const onAmountOfOwnersChange = (e) => setAmountOfOwners(e.target.value)
	const onDescriptionChange = (e) => setDescription(e.target.value)
	const onPriceChange = (e) => setPrice(e.target.value)
	const onMileageChange = (e) => setMileage(e.target.value)

	useEffect(() => {
		const fetchBrands = () => axios.get('/brands').then(res => {
			if (res.status === 200) {
				console.log(res.data);
				setBrands(res.data)
			} else {
				console.log('Unable to fetch brands')
			}
		})
		fetchBrands()
	}, [])

	useEffect(() => {
		const fetchModelsByBrand = () => {
			if (brand) {
				axios.get(`/models?brand=${brand}`).then(res => {
					if (res.status === 200) {
						console.log(res.data);
						setModels(res.data)
					} else {
						console.log('Unable to fetch models')
					}
				})
			}
		}
		fetchModelsByBrand()
	}, [brand])

	const addPost = (event) => {
		event.preventDefault();
		var params = {
			model, type, year, amountOfOwners, description, price, mileage
		}
		axios.post("/post", params, {
			headers: {
				'Authorization': `Bearer ${localStorage.token}`
			}})
			.then(res => {
				console.log(res)
				if (res.status === 201) {
					console.log('Post is created')
					navigate("/admin")
				} else {
					console.log('Unable to create post')
				}
			})
			.catch(err => {
				console.log("Create post error: ", err);
			});
	}

	return (
		<main style={{ padding: "1rem 0" }}>
			<form onSubmit={addPost}>
				<Stack spacing={2}>
					<InputLabel id="brandLabel">Бренд</InputLabel>
					<Select
						labelId="brandLabel"
						id="brandId"
						value={brand}
						label="Брэнд"
						onChange={onBrandChange}
					>
						{brands?.map(brand => {
							return (
								<MenuItem key={brand._id} value={brand._id}>
									{brand.name}
								</MenuItem>
							);
						})}
					</Select>
					<InputLabel id="modelLabel">Модель</InputLabel>
					<Select
						labelId="modelLabel"
						id="modelId"
						value={model}
						label="Модель"
						onChange={onModelChange}
					>
						{models?.map(model => {
							return (
								<MenuItem key={model._id} value={model._id}>
									{model.name}
								</MenuItem>
							);
						})}
					</Select>
					<InputLabel id="typeLabel">Тип кузова</InputLabel>
					<Select
						labelId="typeLabel"
						id="typeId"
						value={type}
						label="Тип кузова"
						onChange={onTypeChange}
					>
						{types?.map(type => {
							return (
								<MenuItem key={type._id} value={type._id}>
									{type.name}
								</MenuItem>
							);
						})}
					</Select>
					<TextField id="year" value={year} onChange={onYearChange} label="Год выпуска" variant="standard" required />
					<TextField id="amountOfOwners" value={amountOfOwners} onChange={onAmountOfOwnersChange} label="Количество владельцев" variant="standard" required />
					<TextField id="description" value={description} onChange={onDescriptionChange} label="Описание" variant="standard" required />
					<TextField id="price" value={price} onChange={onPriceChange} label="Цена" variant="standard" required />
					<TextField id="mileage" value={mileage} onChange={onMileageChange} label="Пробег" variant="standard" required />
					<Button
						variant="outlined"
						type="submit"
						label="submit"
					>Создать</Button>
				</Stack>
			</form>
		</main >
	);
}