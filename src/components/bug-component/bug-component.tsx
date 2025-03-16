import React from 'react';
import { Box, Typography } from '@mui/material';
import { BasicButton, InputFileUpload, NotificationWidget } from '@zenra/widgets';
import { BugResponse } from '@zenra/model';

export interface BugComponentProps {
    onClick: (e: React.FormEvent) => void;
    isLoading?: boolean
    notification: string
    isSuccessful: boolean
    open: boolean
    data: BugResponse
    setOpen: () => void;
    file: File;
    isFileUploaded: boolean;
    setFile: React.Dispatch<React.SetStateAction<File>>;
    setIsFileUploaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const BugComponent: React.FC<BugComponentProps> = ({ onClick, isLoading, notification, isSuccessful, open, data, setOpen, file, isFileUploaded, setFile, setIsFileUploaded }: BugComponentProps) => {

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
        setIsFileUploaded(true);
    }

    return (
        <div className='flex align-items-center justify-content-start font-12'>
            <Box className='light-background width-60p border-radius-15 light-box-shadow' sx={{ height: '629px' }}>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16 bolder margin-top-10'>
                    Pest Identification of Rubber Plantation
                </Typography>
                <form onSubmit={onClick} className='width-max'>
                    <Box className='padding-10 flex flex-direction-column align-items-center margin-top-10'>
                        <InputFileUpload
                            id='image'
                            className='margin-bottom-10 margin-top-10 font-11 light-font'
                            label="Select Image"
                            afterLabel="Selected"
                            file={file}
                            isFileUploaded={isFileUploaded}
                            variant='outlined'
                            required={true}
                            onChange={handleFileChange}
                        />
                        {isFileUploaded && (
                            <Box className='margin-top-10'>
                                <img src={URL.createObjectURL(file)} alt="Selected File" className='width-300 height-300 height-auto border-radius-10' />
                            </Box>
                        )}
                        <BasicButton
                            className='width-120 height-5 font-12 margin-top-25'
                            id='submit'
                            label='Submit'
                            colors='primary'
                            variant='solid'
                            size='sm'
                            type='submit'
                            isLoading={isLoading}
                        />
                        <div className='padding-top-30' style={{ width: '700px', textAlign: 'center' }} >
                            <span className='italic underline bolder'>Disclaimer </span>
                            - The Rubber Plantation Pest Identification platform is designed for informational purposes only. Using advanced convolutional neural networks (CNN) for pest identification, the system provides insights based on trained algorithms. However, the identifications may not fully reflect real-world conditions due to unforeseen variables or data limitations. Users are advised to validate the results independently and consult professionals before making operational or management decisions. The developers are not responsible for any losses or damages incurred from using this platform, and by accessing it, users acknowledge and accept these terms.
                        </div>
                    </Box >
                </form>
            </Box>

            <Box className='light-background width-40p border-radius-15 margin-left-10 light-box-shadow' sx={{ height: '629px' }}>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16 bolder margin-top-10'>
                    Result
                </Typography>
                <Box className='padding-10 flex flex-direction-column align-items-center'>
                    {(data) ? (
                        <Typography className='font-13 margin-bottom-5 bolder'>
                            {data.class}
                        </Typography>
                    ) : (
                        <Typography className='font-13 margin-bottom-5'>
                            <span className='font-12'>Fill the form to predict the bug</span>
                        </Typography>
                    )}
                    {(data.class === 'Mealy Bugs') && (
                        <Typography className='font-13 margin-bottom-5'>
                            <hr />
                            <Typography variant='h6' className='text-align-center font-16 bolder margin-top-5'>
                                Solutions
                            </Typography>
                            <hr />
                            <div className='font-13'>
                                They belong to the class Pseudococcidae of the order Hemiptera. They have
                                sap-sucking mouth parts and their feeding habit is similar to that of the scale insects.
                                However, unlike in the scales, the body of the female mealy bug is covered with a
                                protective white waxy material. The males are tiny, fly-like active insects with two
                                wings and are incapable of feeding at the adult stage. Young stages of the both sexes
                                are flattened, oval, light yellow, six-legged.
                            </div>
                            <div className='font-13 bolder margin-top-10'>
                                Nature of the damage
                            </div>
                            <div className='font-12'>
                                Mealybugs are mainly found feeding at the axils of branching stems and
                                leaves and on the upper and lower surfaces of leaves. When heavily infested,
                                stunting of the plants, defoliation and die back of the infected parts will occur.
                            </div>
                            <div className='font-13 bolder margin-top-10'>
                                Management strategies
                            </div>
                            <div className='font-12'>
                                Mealybugs are not economically important under the field conditions as
                                they are biologically controlled by natural enemies. To prevent mealybugs on a rubber plant, regularly inspect your
                                plant for signs of infestation, quarantine new plants before introducing them to your
                                collection, and use a preventative spray like diluted neem oil to repel mealybugs; if you
                                do notice an infestation, promptly isolate the plant and treat it with insecticidal soap
                                or horticultural oil.If the infestation is heavy and alarming, it is recommended to contact the rubber research institute of Sri Lanka for
                                the management instructions.
                            </div>
                        </Typography>
                    )}
                    {(data.class === 'Cockchafer Grubs') && (
                        <Typography className='font-13 margin-bottom-5'>
                            <hr />
                            <Typography variant='h6' className='text-align-center font-16 bolder margin-top-5'>
                                Solutions
                            </Typography>
                            <hr />
                            <div className='font-13'>
                                Cockchafer grubs are the larval stage of the beetles of the family
                                Scarabaeidae. The grubs of number of species under this family are
                                known to feed on rubber roots. They consist of white or creamy fleshy grubs with
                                incurved bodies of different sizes. The head is distinct and hard, chitinous, brown
                                and they are equipped with a powerful pair of jaws and biting-type mouth parts.
                            </div>
                            <div className='font-13 bolder margin-top-10'>
                                Nature of the damage
                            </div>
                            <div className='font-12'>
                                Eggs are laid in soil and grubs hatch out in 2-3 weeks and feed on organic
                                matter, and gradually begin to attack roots of the young plants. The lateral roots
                                may be eaten off and similarly the cortex of the taproot may also be eaten away.
                                With the root destruction, above-ground symptoms may appear as yellowing of
                                leaves and dieback of shoots. In the case of severe attack, young trees may die.
                            </div>
                            <div className='font-13 bolder margin-top-10'>
                                Management strategies
                            </div>
                            <div className='font-12'>
                                Like in other pests, cockchafers also have many natural enemies who
                                generally keep their population down. However, the plantation should be cleaned of
                                decaying woody debris to eliminate breeding grounds for beetles. Application of the
                                insecticide Imidocloprid to the surrounding soils of the infested plants gives a
                                satisfactory control. Each infested plant has to be treated with 2.5 ml of
                                Imidocloprid diluted in 1.5 l of water. The insecticide has to be poured in to 4 holes
                                dug 10 cm deep in a circle of a six inches to one foot-radius.
                            </div>
                        </Typography>
                    )}
                    {(data.class === 'Scale Insects') && (
                        <Typography className='font-13 margin-bottom-5'>
                            <hr />
                            <Typography variant='h6' className='text-align-center font-16 bolder margin-top-5'>
                                Solutions
                            </Typography>
                            <hr />
                            <div className='font-13'>
                                They belong to the class Coccidae of the order Hemiptera. The females are
                                flattened, elongated-oval shaped, purple black, convex and sedentary, covered with
                                a protective hard smooth exoskeleton, hence referred to as scale insects. The adult males are delicate and possess mouth parts and are harmless to the plants.
                            </div>
                            <div className='font-13 bolder margin-top-10'>
                                Nature of the damage
                            </div>
                            <div className='font-12'>
                                Their feeding mechanism is to insert specialized tube-like mouth parts into
                                plant tissues and suck the sap. The adult females and the pupal stages of both sexes
                                are well adapted for this type of feeding. As a result of their feeding on the green
                                shoots, petioles and underside of the leaves along the mid-rib and veins, plants get
                                weakened. Similarly, the apical bud may also be destroyed in a heavy attack.
                                Young seedling plants in nurseries are highly susceptible to the scale insects. Under
                                favourable weather conditions, the seedlings may be completely killed. In addition
                                to the direct damage, it results in reduction of the photosynthesis due to sooty
                                moulds development on their sugary excreta.
                            </div>
                            <div className='font-13 bolder margin-top-10'>
                                Management strategies
                            </div>
                            <div className='font-12'>
                                Normally, scale insects are biologically controlled by natural enemies such as predatory
                                insects and parasitic fungi in the field conditions. However, the natural balance could be
                                destroyed in situations such as in large-scale nurseries which are a favourable habitat for
                                them. To prevent scale insects on a rubber plant use horticultural oils. Regularly inspect
                                Rubber tree for early signs of scale insects to manage infestations before they spread.
                                Look for pests before bringing new plants inside.   Limit nitrogen-rich fertilizers, which
                                encourage lush growth, making plants more attractive to scale insects.In a heavy infestation,
                                it is recommended to contact the rubber research institute of Sri Lanka for the management
                                instructions.
                            </div>
                        </Typography>
                    )}
                </Box>
            </Box>
            <NotificationWidget
                id='notification'
                className='font-12'
                label={notification}
                variant='solid'
                isSuccessful={isSuccessful}
                open={open}
                setOpen={setOpen}
            />
        </div >
    );
};

export default BugComponent;
