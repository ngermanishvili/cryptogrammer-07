import { useState, useMemo, useCallback, useContext } from 'react'
import { useRouter } from 'next/router'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button, Input } from '@/components'
import images from '@/assets/'


const CreatedNFTs = () => {
  const [formInput, setformInput] = useState({ price: '', name: '', description: '' })
  const [fileUrl, setfileUrl] = useState(null)
  const { theme } = useTheme()

  const onDrop = useCallback => (() => {
    // upload image to ipfs
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,

  })

  const fileStyle = useMemo(() => (
    `dark:bg-nft-black-1 bg-white border dark:border-white border-mft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed
    
    ${isDragActive && 'border-file-active'}
    ${isDragAccept && 'border-file-active'}
    ${isDragReject && 'border-file-reject'}
    `
  ), [isDragActive, isDragAccept, isDragReject])

  console.log(formInput);

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-3/5 md:w-full mt-12">
        <h1 className="text-2xl minlg:text-4xl font-semibold sm:mb-4">Create new NFT</h1>
        <div className='mt-16'>
          <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-xl'>Upload File</p>
          <div className='mt-4'>
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className='flexCenter flex-col text-center'>
                <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-xl'>JPG, PNG, GIF, SVG, WEBM, Max 100mb</p>
                <div className='my-12 w-full flex justify-center'>
                  <Image
                    src={images.upload}
                    width={100}
                    height={100}
                    alt='file upload'
                    className={theme === 'light' ? 'filter invert' : undefined}
                  />
                </div>

                <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-sm'>Drag and Drop File</p>
                <p className='font-poppins dark:text-white text-nft-black-1 font-semibold text-sm mt-2'>or Browse media on your device</p>

              </div>
            </div>
            {fileUrl && (
              <aside>
                <div>
                  <img src={fileUrl} alt='asset_file' />
                </div>
              </aside>
            )}
          </div>
        </div>

        <Input inputType='input'
          title='Name'
          placeholder='Item Name'
          handleClick={(e) => setformInput({ ...formInput, name: e.target.value })}
        />
        <Input inputType='textarea'
          title='Description'
          placeholder='NFT Description'
          handleClick={(e) => setformInput({ ...formInput, description: e.target.value })}
        />
        <Input inputType='number'
          title='Price'
          placeholder='Nft Price'
          handleClick={(e) => setformInput({ ...formInput, price: e.target.value })}
        />
        <div className='mt-7 w-full flex justify-end'>
          <Button
            btnName='Create NFT'
            className='rounded-xl'


          />
        </div>
      </div>
    </div>
  )
}

export default CreatedNFTs