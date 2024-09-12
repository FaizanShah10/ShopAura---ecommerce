import React from 'react'
import { useForm, Controller } from "react-hook-form"


import CreatableSelect from 'react-select/creatable';
import { useCreateProductMutation } from '../../../../Backend/auth/productApi';


const AddNewItem = () => {
  const { register, handleSubmit, setValue, control } = useForm()

  const [createProduct] = useCreateProductMutation()

  const handlePostSubmission  = async (data) => {
    //console.log(data)

    try {

      const newProductData  = {
        ...data,
        colors: data.colors || [],
        sizes: data.sizes || [],
      }

      const newProduct = await createProduct(newProductData).unwrap();
      console.log('Product created successfully:', newProduct);

      reset()
      
    } catch (error) {
      console.error('Failed to create product:', error);
    }

  }

  const colorOptions = [
    { value: 'black', label: 'black' },
    { value: 'white', label: 'white' },
    { value: 'golden', label: 'golden' },
    { value: 'red', label: 'red' },
    { value: 'silver', label: 'silver' },
    { value: 'blue', label: 'blue' },
  ];

  const sizeOptions = [
    {value: 'small', label: 'S'},
    {value: 'medium', label: 'M'},
    {value: 'large', label: 'L'},
    {value: 'extra-large', label: 'Xl'},
    {value: 'extra-extra-large', label: 'XXl'},
  ]
  
  return (
    <div className='m-4'>
      <h1 className='font-[Gilroy-Bold] text-3xl text-center mt-10'>Add New Item</h1>

        <div className=' mx-auto mt-10'>
          <form onSubmit={handleSubmit(handlePostSubmission)} className='flex flex-col gap-5' action="">
            {/* Product Info */}
            <div className='lg:w-[60vw] md:w-[60vw] sm:w-[63vw] w-[80vw] h-auto border-gray-300 border-[1px] rounded-md p-4 mx-auto'>
              <h2 className='font-[Gilroy-Bold] mb-2'>Product Info</h2>
              <label className='font-[Gilroy-Medium] p-1' htmlFor="name"> Name</label>
              <input 
              className='w-full px-2 py-2 mb-6 rounded-md border-gray-300 border-[1px] font-[Gilroy-Medium]' 
              type="text" 
              placeholder='Ex. A Classic Golden ring'
              {...register("name")}
              />

              <label className='font-[Gilroy-Medium] p-1' htmlFor="description"> Description</label>
              <textarea 
              rows={4} 
              className='w-full px-2 py-2 mb-6 rounded-md border-gray-300 border-[1px] font-[Gilroy-Medium] resize-none' 
              type="text" 
              placeholder='Ex. A Classic Golden ring'
              {...register("description")}
              />

              <label className='font-[Gilroy-Medium] p-1' htmlFor="name">Category</label> <br />
              <select 
              className='px-4 py-2 rounded-md bg-gray-200' 
              name="category"
              {...register("category")}
              >
                  <option value="jewellery">jewellery</option>
                  <option value="accessories">accessories</option>
                  <option value="dress">dress</option>
                  <option value="cosmetics">Cosmetics</option>
              </select>

            </div>

            {/* Product Media */}
            <div className='lg:w-[60vw] md:w-[60vw] sm:w-[63vw] w-[80vw] h-auto border-gray-300 border-[1px] rounded-md p-4 mx-auto'>
              <h2 className='font-[Gilroy-Bold] mb-2'>Media</h2>
              <input 
              className='w-full px-2 py-2 mb-6 rounded-md border-gray-300 border-[1px] font-[Gilroy-Medium]' 
              type="text" 
              name='image'
              placeholder='Your Image url'
              {...register("image")}
              />
            </div>

            {/* Product Pricing */}
            <div className='lg:w-[60vw] md:w-[60vw] sm:w-[63vw] w-[80vw] h-auto border-gray-300 border-[1px] rounded-md p-4 mx-auto'>
              <h2 className='font-[Gilroy-Bold] mb-2'>Pricing</h2>
              <label className='font-[Gilroy-Medium] p-1' htmlFor="price">Current Price</label>
              <input 
              className='w-full px-2 py-2 mb-6 rounded-md border-gray-300 border-[1px] font-[Gilroy-Medium]' 
              type="text" 
              placeholder='Ex. $29.99'
              {...register("price")}
              />
            
              <label className='font-[Gilroy-Medium] p-1' htmlFor="oldPrice">Old Price</label>
              <input 
              className='w-full px-2 py-2 mb-6 rounded-md border-gray-300 border-[1px] font-[Gilroy-Medium]' 
              type="text" 
              placeholder='Ex. $29.99'
              {...register("oldPrice")}
              />

            </div>

            {/* Product Variants */}
            <div className='lg:w-[60vw] md:w-[60vw] sm:w-[63vw] w-[80vw] h-auto border-gray-300 border-[1px] rounded-md p-4 mx-auto'>
              <h2 className='font-[Gilroy-Bold] mb-2'>Variants</h2>
              <label className='font-[Gilroy-Medium] p-1' htmlFor="colors">Color</label>
              <Controller
                name="colors"
                control={control} // Ensure you pass the control object from useForm
                defaultValue={[]} // Set default value if needed
                render={({ field: { onChange, value, ref } }) => (
                  <CreatableSelect
                  className='mb-3'
                    isMulti
                    options={colorOptions}
                    value={colorOptions.filter(option => value.includes(option.value))}
                    onChange={(selectedOptions) => {
                      const colors = selectedOptions.map(option => option.value);
                      onChange(colors); // Notify react-hook-form of the change
                    }}
                    ref={ref}
                  />
                )}
              />
            
              <label className='font-[Gilroy-Medium] p-1' htmlFor="oldPrice">Size</label>
              <Controller
                name="sizes"
                control={control} // Ensure you pass the control object from useForm
                defaultValue={[]} // Set default value if needed
                render={({ field: { onChange, value, ref } }) => (
                  <CreatableSelect
                    isMulti
                    options={sizeOptions}
                    value={sizeOptions.filter(option => value.includes(option.value))}
                    onChange={(selectedOptions) => {
                      const sizes = selectedOptions.map(option => option.value);
                      onChange(sizes); 
                    }}
                    ref={ref}
                  />
                )}
              />

            </div>


            <button className='px-4 py-2 w-[150px] mx-auto rounded-md bg-red-700 text-white font-[Gilroy-Medium]'>Post Product</button>
          </form>
        </div>

      
    </div>
  )
}

export default AddNewItem