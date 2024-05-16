import { View,Text, TouchableOpacity, Image, ScrollView} from "react-native";
import { paginapv } from'./style.jsx';
import Cabecalho from "../../components/header/index.jsx";
import FooterComponent from "../../components/footer/index.jsx";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen(){

    const navigation = useNavigation();
    
    return(
        <View style={paginapv.root}>
                <Cabecalho/>
                <ScrollView>
                    <View style={paginapv.container}>
                        <View  style={paginapv.sombrab}><Image source={require('../../assets/BannerPrincipal.jpeg')} style={paginapv.Banner} />
                        </View>
                        <Text style={paginapv.titulo}>PreparaVest</Text>
                        <Text style={paginapv.texto}> Seu parceiro na jornada rumo ao sucesso nos vestibulares!
                            Oferecemos suporte educacional personalizado para estudantes
                            que buscam a aprovação nos exames vestibulares.
                            Explore nossos recursos de estudo de alta qualidade 
                            e comece sua jornada rumo ao sucesso acadêmico hoje mesmo!</Text>
                        <Text style={{fontSize: 30, fontWeight: 'bold'}}> Por onde começar?!</Text>
                        <TouchableOpacity style={paginapv.butao} onPress={()=> navigation.navigate("PaginaEnem")}>
                            <Text style={paginapv.enemTexto}> ENEM</Text>
                        </TouchableOpacity>
                    </View>
                <FooterComponent />
            </ScrollView>
        </View>
    );
}
