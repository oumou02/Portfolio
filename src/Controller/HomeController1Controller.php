<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController1Controller extends AbstractController
{
    /**
     * @Route("/home/controller1", name="home_controller1")
     */
    public function index(): Response
    {
        return $this->render('home_controller1/index.html.twig', [
            'controller_name' => 'HomeController1Controller',
        ]);
    }
}
