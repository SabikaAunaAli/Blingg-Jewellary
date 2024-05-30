

import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../../fireabase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function Mystate(props) {
  const navigate = useNavigate();
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState([]);
  const [searchkey, setSearchkey] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterPrice, setFilterPrice] = useState('');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
      document.querySelectorAll('ul li').forEach(li => {
        li.style.color = 'white';
      });
      document.querySelectorAll('p').forEach(paragraph => {
        paragraph.style.color = 'orange';
      });
      document.querySelectorAll('.logoimage').forEach(image => {
        image.classList.add('invert');
      });
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.querySelectorAll('ul li').forEach(li => {
        li.style.color = '';
      });
      document.querySelectorAll('p').forEach(paragraph => {
        paragraph.style.color = '';
      });
      document.querySelectorAll('.logoimage').forEach(image => {
        image.classList.remove('invert');
      });
    }
  };

  const addProduct = async () => {
    if (!products.title || !products.price || !products.imageUrl || !products.category || !products.description) {
      return toast.error("All fields are required");
    }

    setLoading(true);

    try {
      const productRef = collection(fireDB, 'products');
      await addDoc(productRef, products);
      toast.success("Product added successfully");
      setTimeout(() => {
        navigate ( '/dashboard');
      }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getProductData = async () => {
    setLoading(false);

    try {
      const q = query(collection(fireDB, 'products'), orderBy('time'));
      const data = onSnapshot(q, (QuerySnapshot) => {
        const productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false);
      });

      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const edithandle = (item) => {
    setProducts(item);
  };

  const updateProduct = async () => {
    setLoading(true);

    try {
      await setDoc(doc(fireDB, 'products', products.id), products);
      toast.success("Product updated successfully");
      setTimeout(() => {
       navigate ('/dashboard');
      }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteProduct = async (item) => {
    setLoading(true);

    try {
      await deleteDoc(doc(fireDB, 'products', item.id));
      toast.success('Product deleted successfully');
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getOrderData = async () => {
    setLoading(false);

    try {
      const result = await getDocs(collection(fireDB, "order"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
      });
      setOrder(ordersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getUserData = async () => {
    setLoading(false);

    try {
      const result = await getDocs(collection(fireDB, "users"));
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
      });
      setUser(usersArray);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrderData();
    getUserData();
  }, []);



  return (
    <MyContext.Provider value={{
      mode, toggleMode, loading, setLoading,
      products, setProducts, addProduct, product,
      edithandle, updateProduct, deleteProduct, order,
      user, searchkey, setSearchkey, filterType, setFilterType,
      filterPrice, setFilterPrice
    }}>
      {props.children}
    </MyContext.Provider>
  );
}
