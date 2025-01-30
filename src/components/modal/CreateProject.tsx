import { Modal } from '../../ui/modal/Modal'
import React, { useState } from 'react'
import { Select } from '../../ui/input/Select'
import { IndexInput } from '../../ui/input/IndexInput'
import { Button } from '../../ui/buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../features/redux/store'
import { addProject } from '../../features/redux/projects/projectSlice'
import { validateProjectData } from '../../features/validation/CreateProjectValidation'

interface ModalProps {
    open: boolean;  
    setOpen: (value: boolean) => void;
}

export const CreateProject: React.FC<ModalProps> = ({ open, setOpen }) => {
    const [validationData, setValidationData] = useState({
        isValid: false,
        message: ''
    })

    const projects = useSelector((state: RootState) => state.projects);
    const [version, setVersion] = useState('')
    const [projectName, setProjectName] = useState('')
    const dispatch = useDispatch<AppDispatch>();

    return(
        <Modal title='Создание нового проекта CustomNPC' open={open} setOpen={setOpen}>
            <IndexInput value={projectName} setValue={setProjectName} placeholder='Название проекта'/>
            <div className='flex sm:flex-row flex-col gap-[10px] items-center justify-center mt-[10px]'>
                <Select items={version} setItems={setVersion}></Select>
                <Button title='Создать' className='w-full' onClick={() => {
                    setValidationData(validateProjectData({
                        "title": projectName,
                        'version': version
                    }))
                    validateProjectData({
                        "title": projectName,
                        'version': version
                    }).isValid && !projects.projects.includes(`sansara_${projectName}_${version}`) &&
                    dispatch(addProject(`sansara_${projectName}_${version}`));
                }}/>
            </div>
            <p className='text-red-700 text-center text-sm mt-[20px]'>{projects.projects.includes(`sansara_${projectName}_${version}`) ? 'Проект с таким названием уже существует' : !validationData.isValid && validationData.message}</p>
        </Modal>
    )
}