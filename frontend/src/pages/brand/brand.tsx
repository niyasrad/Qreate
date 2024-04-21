import { useState, createRef, useEffect } from "react";
import { AppContent, AppDesc, AppSBar, AppSTitle, AppTitle, CameraIcon, DeleteIcon, DoneIcon } from "../../components";
import { useGlobalContext } from "../../contexts/global.context";
import { BrandBoxDesc, BrandBoxTitle, BrandContainer, BrandContent, BrandDetailsEditor, BrandDetailsOptions, BrandForm, BrandInput, BrandLabel, BrandLogoBtn, BrandLogoEdit, BrandLogoEditor, BrandLogoImage, BrandLogoInput, BrandLogoOptions, BrandLogoPreview, BrandTextArea } from "./brand.styles";

import q_logo from "../../assets/faq/logo.png";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../components/loading/loading";

interface BrandDetailsInterface {
    _id: string,
    brand_name: string,
    brand_desc: string,
    brand_email: string,
    image_url: boolean,
    custom_url: string
}

interface BrandDetailsDataInterface {
    brand_name: string,
    brand_desc: string
}
  
export default function Brand() {

    const [isLoading, setIsLoading] = useState<boolean>(true)

    const { brandID } = useGlobalContext()

    const fileInputRef = createRef<HTMLInputElement>()

    const [imageSrc, setImageSrc] = useState<string | undefined>(q_logo)
    const [imageFile, setImageFile] = useState(null)

    const [brandDetails, setBrandDetails] = useState<BrandDetailsInterface>({
        _id: "",
        brand_name: "",
        brand_desc: "",
        brand_email: "",
        image_url: false,
        custom_url: ""
    })

    const [brandDetailsData, setBrandDetailsData] = useState<BrandDetailsDataInterface>({
        brand_name: "",
        brand_desc: ""
    })

    useEffect(() => {
        axios.get(import.meta.env.VITE_BASE_API + '/brand/get-brand')
        .then(res => {
            let data = res.data
            let brand = data.data
            setBrandDetails(brand)
            setBrandDetailsData(
                {
                    brand_name: brand.brand_name,
                    brand_desc: brand.brand_desc
                }
            )
            if (brand.image_url) {
                setImageSrc(import.meta.env.VITE_BASE_API + '/cdn_asset/brand/' + brandID + '.png')
            }
        })
        .catch(() => {
            toast.error("An error occurred while fetching details!")
        })
        .finally(() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 500)
        })
    }, [])

    
    const handleDeleteImage = () => {
        if (imageSrc === q_logo || !brandDetails.image_url) {
            toast.info(`Image already removed!`)
            return
        }
        axios.delete(import.meta.env.VITE_BASE_API + '/image/delete-picture')
        .then(() => {
            toast.success("Logo Removed Successfully!")
        })
        .catch(() => {
            toast.error("An error occurred while removing logo!")
        })
        setImageSrc(q_logo)
        setImageFile(null)
        setBrandDetails(
            {
                ...brandDetails,
                image_url: false
            }
        )
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleUploadImage = () => {
        if (imageFile === null) {
            toast.error("Please select an image to upload!")
            return
        }

        const formData = new FormData()
        formData.append('file', imageFile as File)
        axios.post(import.meta.env.VITE_BASE_API + '/image/update-logo', formData, {
            headers: {
                    'Content-Type': 'multipart/form-data'
            }}
        )
        .then(() => {
            setBrandDetails(
                {
                    ...brandDetails,
                    image_url: true
                }
            )
            toast.success("Logo Updated Successfully!")
        })
        .catch(() => {
            toast.error("An error occurred while updating logo!")
        })
    }

    const handleRevertDetails = () => {
        if (brandDetailsData.brand_name === brandDetails.brand_name && brandDetailsData.brand_desc === brandDetails.brand_desc) {
            toast.info("No Changes to Revert!")
            return
        }
        setBrandDetailsData(
            {
                brand_name: brandDetails.brand_name,
                brand_desc: brandDetails.brand_desc
            }
        )
        toast.info("Brand Details Reverted Successfully!")
    }

    const handleSaveDetails = () => {
        if (brandDetailsData.brand_name.trim() === "" || brandDetailsData.brand_desc.trim() === "") {
            toast.error("Name or Description is Empty!")
            return
        }

        if (brandDetailsData.brand_name === brandDetails.brand_name && brandDetailsData.brand_desc === brandDetails.brand_desc) {
            toast.info("No Changes to Update!")
            return
        }
        axios.put(import.meta.env.VITE_BASE_API + '/brand/update-profile', {
            brand_name: brandDetailsData.brand_name,
            brand_desc: brandDetailsData.brand_desc
        })
        .then(() => {
            setBrandDetails(
                {
                    ...brandDetails,
                    brand_name: brandDetailsData.brand_name,
                    brand_desc: brandDetailsData.brand_desc
                }
            )
            toast.success("Brand Details Updated Successfully!")
        })
        .catch(() => {
            toast.error("An error occurred while updating brand details!")
        })
    }

    return (
        <BrandContainer>
            <AppContent>
                <AppTitle>Q<span>Brand</span></AppTitle>
                <AppSBar>
                    <AppSTitle>Pro<span>fi</span>le</AppSTitle>
                </AppSBar>
                <AppDesc>
                    Did you know that setting the <span>right</span> description for a brand can be hard? The importance of branding is reflected, known to Qreate as a fellow brand. Thus, we allow brands to edit their <span>Description</span>, <span>name</span>, and even their <span>Logo</span>. You can then check out the changes <span>reflected</span> on your FAQ page.
                </AppDesc>
                <BrandContent>
                {
                    isLoading ? (
                        <Loading />
                    ) :
                    <BrandForm>
                        <BrandLogoEditor>
                            <BrandBoxTitle>Brand Logo</BrandBoxTitle>
                            <BrandBoxDesc>
                                Upload a logo for your brand. This logo will be displayed on your FAQ page.
                            </BrandBoxDesc>
                            
                            <BrandLogoInput
                                id="brand-logo"
                                type="file"
                                ref={fileInputRef}
                                onChange={(event: any) => {
                                    setImageSrc(URL.createObjectURL(event.target.files[0]))
                                    setImageFile(event.target.files[0])
                                }}
                                accept="image/*"
                            />
                            <BrandLogoPreview
                                htmlFor="brand-logo"
                            >
                                <BrandLogoImage 
                                    src={imageSrc}
                                    alt="Brand Logo"
                                />
                                <BrandLogoEdit
                                    initial={{ 
                                        opacity: 0.2,
                                        backdropFilter: "blur(0px)",
                                    }}
                                    whileHover={{ 
                                        opacity: 0.8,
                                        backdropFilter: "blur(3px)",
                                        borderRadius:"0.5rem",
                                        transition: {
                                            duration: 0.2
                                        }
                                    }}
                                >
                                    <CameraIcon 
                                        height={"3rem"}
                                    />
                                </BrandLogoEdit>
                            </BrandLogoPreview>
                            <BrandLogoOptions>
                                <BrandLogoBtn
                                    color="red"
                                    onClick={handleDeleteImage}
                                >
                                    <DeleteIcon 
                                        height={"1.5rem"}
                                    />
                                </BrandLogoBtn>
                                <BrandLogoBtn
                                    color="#151314"
                                    onClick={handleUploadImage}
                                >
                                    <DoneIcon 
                                        height={"1.5rem"}
                                    />
                                </BrandLogoBtn>
                            </BrandLogoOptions>
                        </BrandLogoEditor>
                        <BrandDetailsEditor>
                            <BrandBoxTitle>Brand Details</BrandBoxTitle>
                            <BrandBoxDesc>
                                Edit the details of your brand. These details will be displayed on your FAQ page.
                            </BrandBoxDesc>
                            <BrandLabel>Brand Name</BrandLabel>
                            <BrandInput 
                                type="text"
                                value={brandDetailsData.brand_name}
                                onChange={(event: any) => {
                                    setBrandDetailsData(
                                        {
                                            ...brandDetailsData,
                                            brand_name: event.target.value
                                        }
                                    )
                                }}
                            />
                            <BrandLabel>Brand Description</BrandLabel>
                            <BrandTextArea 
                                value={brandDetailsData.brand_desc}
                                onChange={(event: any) => {
                                    setBrandDetailsData(
                                        {
                                            ...brandDetailsData,
                                            brand_desc: event.target.value
                                        }
                                    )
                                }}
                            />
                            <BrandDetailsOptions>
                                <BrandLogoBtn
                                    color="red"
                                    onClick={handleRevertDetails}
                                >
                                    Revert
                                </BrandLogoBtn>
                                <BrandLogoBtn
                                    color="#151314"
                                    onClick={handleSaveDetails}
                                >
                                    Save
                                </BrandLogoBtn>
                            </BrandDetailsOptions>
                        </BrandDetailsEditor>
                    </BrandForm>
                }
                </BrandContent>
            </AppContent>
        </BrandContainer>
    )
}